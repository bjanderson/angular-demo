import { UiTemplateDialogBodyComponent } from './ui-template-dialog-body.component';

const dialogRef: any = {
  close: () => undefined,
};

const data: any = {
  parent: {
    save: () => undefined,
  },
};

let component: any;
function init(): void {
  component = new UiTemplateDialogBodyComponent(dialogRef, data);
}

describe('UiTemplateDialogBodyComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });

  describe('close', () => {
    beforeEach(() => {
      init();
    });

    it('calls dialogRef.close', () => {
      const spy = spyOn(component.dialogRef, 'close').and.callThrough();
      component.close();
      expect(spy).toHaveBeenCalled();
    });
  });
});
