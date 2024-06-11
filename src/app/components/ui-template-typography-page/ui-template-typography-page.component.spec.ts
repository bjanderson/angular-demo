import { UiTemplateTypographyPageComponent } from './ui-template-typography-page.component';

let component: any;
function init(): void {
  component = new UiTemplateTypographyPageComponent();
}

describe('UiTemplateTypographyPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
