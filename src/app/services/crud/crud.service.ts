import { WritableSignal, signal } from '@angular/core';
import { ICSVModel } from '@bjanderson/app-name-shared';
import { ErrorResponse, getArrayOfModels } from '@bjanderson/utils';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AlertService } from '../alert';
import { ApiService } from '../api';

export abstract class CrudService<T extends ICSVModel> {
  models: WritableSignal<T[]>;

  constructor(
    protected alertService: AlertService,
    protected apiService: ApiService,
    private url: string,
    private Model: new (o?: Partial<T>) => T,
  ) {
    this.models = signal<T[]>(null);
  }

  public create(obj: T[]): Observable<T[]> {
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
    );
  }

  public getAll(args?: any): void {
    this.apiService
      .get(this.url)
      .pipe(
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
      )
      .subscribe((models: T[]) => {});
  }

  public get(id: string): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.apiService.get(url).pipe(
      take(1),
      map((response: any) => new this.Model(response)),
      catchError((error: ErrorResponse) => {
        this.alertService.error(`${CrudService.name}: get(${id}) failed`);
        return EMPTY;
      }),
    );
  }

  public update(obj: T): Observable<T> {
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
    );
  }

  public delete(model: T): Observable<void> {
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
    );
  }
}
