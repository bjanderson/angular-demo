import { UiTemplateTabsPageComponent } from './ui-template-tabs-page.component';

let component: any;
function init(): void {
  component = new UiTemplateTabsPageComponent();
}

describe('UiTemplateTabsPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
