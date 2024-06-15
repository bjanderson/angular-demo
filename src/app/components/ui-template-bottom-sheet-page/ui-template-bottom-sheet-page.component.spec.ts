import { UiTemplateBottomSheetPageComponent } from './ui-template-bottom-sheet-page.component';

let component: any;
function init(): void {
  component = new UiTemplateBottomSheetPageComponent();
}

describe('UiTemplateBottomSheetPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
