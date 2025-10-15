import { matBottomSheet } from '../../../mocks/@angular/material/mat-bottom-sheet.mock';
import { UiTemplateBottomSheetPageComponent } from './ui-template-bottom-sheet-page.component';

let component: any;
function init(): void {
  component = new UiTemplateBottomSheetPageComponent(matBottomSheet);
}

describe('UiTemplateBottomSheetPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
