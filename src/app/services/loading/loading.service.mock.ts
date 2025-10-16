import { callsSpy } from '../../../mocks/utils.mock';

export const loadingService: any = {
  hideLoading: () => undefined,
  showLoading: () => undefined,
};

export const callsLoadingServiceHideLoading = (
  testSubject: () => unknown,
  calledWith?: unknown[]
) => {
  it('calls loadingService.hideLoading', () => {
    const spy = spyOn(loadingService, 'hideLoading').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};

export const callsLoadingServiceShowLoading = (
  testSubject: () => unknown,
  calledWith?: unknown[]
) => {
  it('calls loadingService.showLoading', () => {
    const spy = spyOn(loadingService, 'showLoading').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
