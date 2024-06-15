import { UiTemplateButtonTogglePageComponent } from './ui-template-button-toggle-page.component';

let component: any;
function init(): void {
  component = new UiTemplateButtonTogglePageComponent();
}

describe('UiTemplateButtonTogglePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
