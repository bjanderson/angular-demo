import { UiTemplateButtonsPageComponent } from './ui-template-buttons-page.component';

let component: any;
function init(): void {
  component = new UiTemplateButtonsPageComponent();
}

describe('UiTemplateButtonsPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
