import { UiTemplateTreePageComponent } from './ui-template-tree-page.component';

let component: any;
function init(): void {
  component = new UiTemplateTreePageComponent();
}

describe('UiTemplateTreePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
