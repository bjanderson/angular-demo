import { UiTemplateDatepickerPageComponent } from './ui-template-datepicker-page.component';

let component: any;
function init(): void {
  component = new UiTemplateDatepickerPageComponent();
}

describe('UiTemplateDatepickerPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
