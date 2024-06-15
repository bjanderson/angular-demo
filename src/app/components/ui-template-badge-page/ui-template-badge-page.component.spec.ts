import { UiTemplateBadgePageComponent } from './ui-template-badge-page.component';

let component: any;
function init(): void {
  component = new UiTemplateBadgePageComponent();
}

describe('UiTemplateBadgePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
