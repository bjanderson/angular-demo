import { UiTemplateMenuPageComponent } from './ui-template-menu-page.component';

let component: any;
function init(): void {
  component = new UiTemplateMenuPageComponent();
}

describe('UiTemplateMenuPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
