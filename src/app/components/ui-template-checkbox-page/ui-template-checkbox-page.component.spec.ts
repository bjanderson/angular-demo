import { UiTemplateCheckboxPageComponent } from './ui-template-checkbox-page.component';

let component: any;
function init(): void {
  component = new UiTemplateCheckboxPageComponent();
}

describe('UiTemplateCheckboxPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
