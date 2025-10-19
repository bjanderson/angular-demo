import { callsSpy } from 'src/mocks/utils.mock';

export const router: any = {
  navigateByUrl: () => undefined,
};

export const callsRouterNavigateByUrl = (testSubject: () => unknown, calledWith?: unknown[]) => {
  it('calls router.navigateByUrl', () => {
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
