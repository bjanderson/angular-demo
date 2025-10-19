import { callsSpy } from 'src/mocks/utils.mock';

export const matIconRegistry: any = {
  setDefaultFontSetClass: () => undefined,
};

export const callsMatIconRegistrySetDefaultFontSetClass = (
  testSubject: () => unknown,
  calledWith?: unknown[]
) => {
  it('calls matIconRegistry.setDefaultFontSetClass', () => {
    const spy = spyOn(matIconRegistry, 'setDefaultFontSetClass').and.callThrough();
    testSubject();
    callsSpy(spy, calledWith);
  });
};
