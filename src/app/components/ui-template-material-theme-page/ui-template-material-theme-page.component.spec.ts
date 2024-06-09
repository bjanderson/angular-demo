import { UiTemplateMaterialThemePageComponent } from './ui-template-material-theme-page.component';

let component: any;
function init(): void {
  component = new UiTemplateMaterialThemePageComponent();
}

describe('UiTemplateMaterialThemePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
