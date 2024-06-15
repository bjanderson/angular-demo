import { UiTemplateFormFieldPageComponent } from './ui-template-form-field-page.component';

let component: any;
function init(): void {
  component = new UiTemplateFormFieldPageComponent();
}

describe('UiTemplateFormFieldPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
