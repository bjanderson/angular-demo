import { UiTemplateDialogComponent } from './ui-template-dialog.component';

const dialogRef: any = {
  close: () => undefined,
};

const dialog: any = {
  open: () => dialogRef,
};

let component: any;
function init(): void {
  component = new UiTemplateDialogComponent(dialog);
}

describe('UiTemplateDialogComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });

  describe('open', () => {
    beforeEach(() => {
      init();
    });

    it('calls dialog.open', () => {
      const spy = spyOn(component.dialog, 'open').and.callThrough();
      component.open();
      expect(spy).toHaveBeenCalled();
    });
  });
});
