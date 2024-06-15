import { UiTemplateRadioButtonPageComponent } from './ui-template-radio-button-page.component';

let component: any;
function init(): void {
  component = new UiTemplateRadioButtonPageComponent();
}

describe('UiTemplateRadioButtonPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
