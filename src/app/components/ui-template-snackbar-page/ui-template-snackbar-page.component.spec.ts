import { matSnackBar } from '../../../mocks/@angular/material/mat-snackbar.mock';
import { UiTemplateSnackbarPageComponent } from './ui-template-snackbar-page.component';

let component: any;
function init(): void {
  component = new UiTemplateSnackbarPageComponent(matSnackBar);
}

describe('UiTemplateSnackbarPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
