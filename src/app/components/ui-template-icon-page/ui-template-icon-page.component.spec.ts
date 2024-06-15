import { UiTemplateIconPageComponent } from './ui-template-icon-page.component';

let component: any;
function init(): void {
  component = new UiTemplateIconPageComponent();
}

describe('UiTemplateIconPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
