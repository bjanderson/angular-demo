import { UiTemplateDividerPageComponent } from './ui-template-divider-page.component';

let component: any;
function init(): void {
  component = new UiTemplateDividerPageComponent();
}

describe('UiTemplateDividerPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
