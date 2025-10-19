import { HttpParams } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { httpOptions } from 'src/app/constants';
import {
  callsHttpClientDelete,
  callsHttpClientGet,
  callsHttpClientPatch,
  callsHttpClientPost,
  callsHttpClientPut,
  httpClient,
} from 'src/mocks/@angular/common/http-client.mock';
import { ApiService } from './api.service';

const url = 'test/url';

let service: any;
function init(): void {
  service = new ApiService(httpClient);
}

describe('ApiService', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('constructs', () => {
      expect(service).toBeDefined();
    });
  });

  describe('delete(url: string, body: any, options: any = this.options): void', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named delete', () => {
      expect(typeof service.delete).toEqual('function');
    });

    callsHttpClientDelete(() => {
      service.delete(url).subscribe();
    }, [url, httpOptions]);
  });

  describe('get(url: string, params?: any, options: any = this.options): void', () => {
    const params = new HttpParams({ fromObject: { id: 1 } });
    const options = { ...httpOptions, params };

    beforeEach(() => {
      init();
    });

    it('has a function named get', () => {
      expect(typeof service.get).toEqual('function');
    });

    callsHttpClientGet(() => {
      const params = { id: 1 };
      service.get(url, params).subscribe();
    }, [url, options]);
  });

  describe('patch(url: string, body: any, options: any = this.options): void', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named patch', () => {
      expect(typeof service.patch).toEqual('function');
    });

    callsHttpClientPatch(() => {
      const body = { id: 1 };
      service.patch(url, body).subscribe();
    }, [url, { id: 1 }, httpOptions]);
  });

  describe('post(url: string, body: any, options: any = this.options): void', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named post', () => {
      expect(typeof service.post).toEqual('function');
    });

    callsHttpClientPost(() => {
      const body = { id: 1 };
      service.post(url, body).subscribe();
    }, [url, { id: 1 }, httpOptions]);
  });

  describe('put(url: string, body: any, options: any = this.options): void', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named put', () => {
      expect(typeof service.put).toEqual('function');
    });

    callsHttpClientPut(() => {
      const body = { id: 1 };
      service.put(url, body).subscribe();
    }, [url, { id: 1 }, httpOptions]);
  });

  describe('mapError<TResponse>(error: any): Observable<TResponse>', () => {
    beforeEach(() => {
      init();
      service.mapResponse = () => {};
    });

    it('calls the mapResponse function', () => {
      spyOn(service, 'mapResponse').and.returnValue(EMPTY);
      service.mapError({}).subscribe();
      expect(service.mapResponse).toHaveBeenCalled();
    });
  });

  describe('mapResponse(response: any): any', () => {
    beforeEach(() => {
      init();
    });

    it('returns response.json() if possible', () => {
      const response = { a: 'a', json: () => 'test response' };
      const test = service.mapResponse(response);
      expect(test).toEqual('test response');
    });

    it('returns the given response if response.json() fails', () => {
      const response = { a: 'a', b: 'test response' };
      const test = service.mapResponse(response);
      expect(test).toEqual(response);
    });
  });
});
