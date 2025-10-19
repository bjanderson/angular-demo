import { of } from 'rxjs';
import { callsSpy } from '../../utils.mock';

export const httpClient: any = {
  delete: () => of({}),
  get: () => of({}),
  patch: () => of({}),
  post: () => of({}),
  put: () => of({}),
};

export const callsHttpClientDelete = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls httpClient.delete', () => {
    const spy = spyOn(httpClient, 'delete').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsHttpClientGet = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls httpClient.get', () => {
    const spy = spyOn(httpClient, 'get').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsHttpClientPatch = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls httpClient.patch', () => {
    const spy = spyOn(httpClient, 'patch').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsHttpClientPost = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls httpClient.post', () => {
    const spy = spyOn(httpClient, 'post').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsHttpClientPut = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls httpClient.put', () => {
    const spy = spyOn(httpClient, 'put').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
