import { callsSpy } from '../utils.mock';

export const toastrService: any = {
  error: () => undefined,
  info: () => undefined,
  success: () => undefined,
  warning: () => undefined,
};

export const callsToastrServiceError = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls toastrService.error', () => {
    const spy = spyOn(toastrService, 'error').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsToastrServiceInfo = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls toastrService.info', () => {
    const spy = spyOn(toastrService, 'info').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsToastrServiceSuccess = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls toastrService.success', () => {
    const spy = spyOn(toastrService, 'success').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsToastrServiceWarning = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls toastrService.warning', () => {
    const spy = spyOn(toastrService, 'warning').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
