import { callsSpy } from '../../../mocks/utils.mock';

export const alertService: any = {
  error: () => undefined,
  errorResponse: () => undefined,
  info: () => undefined,
  success: () => undefined,
  warn: () => undefined,
};

export const callsAlertServiceError = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls alertService.error', () => {
    const spy = spyOn(alertService, 'error').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsAlertServiceErrorResponse = (
  testSubject: () => unknown,
  calledWith?: unknown[]
) => {
  it('calls alertService.errorResponse', () => {
    const spy = spyOn(alertService, 'errorResponse').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsAlertServiceInfo = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls alertService.info', () => {
    const spy = spyOn(alertService, 'info').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsAlertServiceSuccess = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls alertService.success', () => {
    const spy = spyOn(alertService, 'success').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsAlertServiceWarn = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls alertService.warn', () => {
    const spy = spyOn(alertService, 'warn').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
