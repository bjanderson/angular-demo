import { UiTemplateSlideTogglePageComponent } from './ui-template-slide-toggle-page.component';

let component: any;
function init(): void {
  component = new UiTemplateSlideTogglePageComponent();
}

describe('UiTemplateSlideTogglePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
