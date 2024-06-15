import { UiTemplateSnackbarPageComponent } from './ui-template-snackbar-page.component';

let component: any;
function init(): void {
  component = new UiTemplateSnackbarPageComponent();
}

describe('UiTemplateSnackbarPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
