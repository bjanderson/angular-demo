import { WritableSignal, signal } from '@angular/core';
import { ErrorResponse, getArrayOfModels } from '@bjanderson/utils';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, map, take } from 'rxjs/operators';
import { IHasId } from '../../interfaces';
import { AlertService } from '../alert';
import { ApiService } from '../api';
import { LoadingService } from '../loading';

export abstract class CrudService<T extends IHasId> {
  models: WritableSignal<T[]>;

  constructor(
    protected alertService: AlertService,
    protected apiService: ApiService,
    protected loadingService: LoadingService,
    private url: string,
    private Model: new (o?: Partial<T>) => T
  ) {
    this.models = signal<T[]>(null);
  }

  public create(obj: T[]): Observable<T[]> {
    this.loadingService.showLoading();
    return this.apiService.post(this.url, obj).pipe(
      take(1),
      map((response: any) => {
        const createdModels = getArrayOfModels(this.Model, response);
        this.models.update((models: T[]) => [...models, ...createdModels]);
        return createdModels;
      }),
      catchError((error: ErrorResponse) => {
        this.alertService.error(`${CrudService.name}: create() failed`);
        return EMPTY;
      }),
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
  }

  public getAll(args?: any): Observable<T[]> {
    this.loadingService.showLoading();
    return this.apiService.get(this.url).pipe(
      take(1),
      map((response: any) => {
        const models = getArrayOfModels(this.Model, response);
        this.models.set(models);
        return models;
      }),
      catchError((error: ErrorResponse) => {
        this.alertService.error(`${CrudService.name}: getAll() failed`);
        return EMPTY;
      }),
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
  }

  public get(id: string): Observable<T> {
    this.loadingService.showLoading();
    const url = `${this.url}/${id}`;
    return this.apiService.get(url).pipe(
      take(1),
      map((response: any) => new this.Model(response)),
      catchError((error: ErrorResponse) => {
        this.alertService.error(`${CrudService.name}: get(${id}) failed`);
        return EMPTY;
      }),
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
  }

  public update(obj: T): Observable<T> {
    this.loadingService.showLoading();
    return this.apiService.patch(`${this.url}/${obj.id}`, obj).pipe(
      take(1),
      map((response: any) => {
        const model = new this.Model(response);
        this.models.update((models: T[]) => {
          const i = models.findIndex((d) => d.id === model.id);
          if (i > -1) {
            models[i] = model;
          }
          return [...models];
        });
        return model;
      }),
      catchError((error: ErrorResponse) => {
        this.alertService.error(`${CrudService.name}: update() failed`);
        return EMPTY;
      }),
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
  }

  public delete(model: T): Observable<void> {
    this.loadingService.showLoading();
    const url = `${this.url}/${model.id}`;
    return this.apiService.delete(url).pipe(
      take(1),
      map((response: any) => {
        this.models.update((models: T[]) => {
          return models.filter((d) => d.id !== model.id);
        });
        return response;
      }),
      catchError((error: ErrorResponse) => {
        this.alertService.error(`${CrudService.name}: delete() failed`);
        return EMPTY;
      }),
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
  }
}
