import { UiTemplateToolbarPageComponent } from './ui-template-toolbar-page.component';

let component: any;
function init(): void {
  component = new UiTemplateToolbarPageComponent();
}

describe('UiTemplateToolbarPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
