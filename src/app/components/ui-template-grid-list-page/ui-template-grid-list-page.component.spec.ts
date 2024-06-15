import { UiTemplateGridListPageComponent } from './ui-template-grid-list-page.component';

let component: any;
function init(): void {
  component = new UiTemplateGridListPageComponent();
}

describe('UiTemplateGridListPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
