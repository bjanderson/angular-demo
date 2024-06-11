import { UiTemplateColorsPageComponent } from './ui-template-colors-page.component';

let component: any;
function init(): void {
  component = new UiTemplateColorsPageComponent();
}

describe('UiTemplateColorsPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
