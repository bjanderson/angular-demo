import { UiTemplateExpansionPanelPageComponent } from './ui-template-expansion-panel-page.component';

let component: any;
function init(): void {
  component = new UiTemplateExpansionPanelPageComponent();
}

describe('UiTemplateExpansionPanelPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
