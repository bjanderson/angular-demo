import { UiTemplatePageComponent } from './ui-template-page.component';

let component: any;
function init(): void {
  component = new UiTemplatePageComponent();
}

describe('UiTemplatePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
