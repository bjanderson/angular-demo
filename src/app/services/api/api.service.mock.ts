import { of } from 'rxjs';
import { callsSpy } from '../../../mocks/utils.mock';

export const apiService: any = {
  delete: () => of({}),
  get: () => of({}),
  patch: () => of({}),
  post: () => of({}),
  put: () => of({}),
};

export const callsApiServiceDelete = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls apiService.delete', () => {
    const spy = spyOn(apiService, 'delete').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsApiServiceGet = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls apiService.get', () => {
    const spy = spyOn(apiService, 'get').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsApiServicePatch = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls apiService.patch', () => {
    const spy = spyOn(apiService, 'patch').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsApiServicePost = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls apiService.post', () => {
    const spy = spyOn(apiService, 'post').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsApiServicePut = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls apiService.put', () => {
    const spy = spyOn(apiService, 'put').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
