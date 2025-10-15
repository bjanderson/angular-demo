import { formBuilder } from '../../../mocks/@angular/forms/form-builder.mock';
import { UiTemplateStepperPageComponent } from './ui-template-stepper-page.component';

let component: any;
function init(): void {
  component = new UiTemplateStepperPageComponent(formBuilder);
}

describe('UiTemplateStepperPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
