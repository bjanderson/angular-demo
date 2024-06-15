import { UiTemplateTooltipPageComponent } from './ui-template-tooltip-page.component';

let component: any;
function init(): void {
  component = new UiTemplateTooltipPageComponent();
}

describe('UiTemplateTooltipPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
