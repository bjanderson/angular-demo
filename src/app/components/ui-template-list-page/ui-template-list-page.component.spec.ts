import { UiTemplateListPageComponent } from './ui-template-list-page.component';

let component: any;
function init(): void {
  component = new UiTemplateListPageComponent();
}

describe('UiTemplateListPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
