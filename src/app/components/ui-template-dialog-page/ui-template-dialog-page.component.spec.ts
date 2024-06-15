import { UiTemplateDialogPageComponent } from './ui-template-dialog-page.component';

let component: any;
function init(): void {
  component = new UiTemplateDialogPageComponent();
}

describe('UiTemplateDialogPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
