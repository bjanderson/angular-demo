import { UiTemplateCardPageComponent } from './ui-template-card-page.component';

let component: any;
function init(): void {
  component = new UiTemplateCardPageComponent();
}

describe('UiTemplateCardPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
