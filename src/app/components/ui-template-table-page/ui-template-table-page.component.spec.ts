import { UiTemplateTablePageComponent } from './ui-template-table-page.component';

let component: any;
function init(): void {
  component = new UiTemplateTablePageComponent();
}

describe('UiTemplateTablePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
