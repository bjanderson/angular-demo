import { UiTemplateSliderPageComponent } from './ui-template-slider-page.component';

let component: any;
function init(): void {
  component = new UiTemplateSliderPageComponent();
}

describe('UiTemplateSliderPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
