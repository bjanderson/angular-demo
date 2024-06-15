import { UiTemplateInputPageComponent } from './ui-template-input-page.component';

let component: any;
function init(): void {
  component = new UiTemplateInputPageComponent();
}

describe('UiTemplateInputPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
