import { ErrorResponse } from '@bjanderson/utils';
import { Observable, throwError } from 'rxjs';

export const callsSpy = (spy, calledWith: unknown[]): void => {
  if (calledWith?.length > 0) {
    expect(spy).toHaveBeenCalledWith(...calledWith);
  } else {
    expect(spy).toHaveBeenCalled();
  }
};

export const mockFunction = (
  obj: unknown,
  method: string,
  data: Observable<unknown> | unknown
): void => {
  jest.spyOn<any, any>(obj, method).mockImplementationOnce(() => data);
};

export const mockError = (
  obj: unknown,
  method: string,
  errorFn = () => throwError(() => new ErrorResponse({ errorMessage: 'test error' }))
): void => {
  jest.spyOn<any, any>(obj, method).mockImplementationOnce(errorFn);
};
