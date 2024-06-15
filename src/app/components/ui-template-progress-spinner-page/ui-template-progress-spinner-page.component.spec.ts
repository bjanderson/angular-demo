import { UiTemplateProgressSpinnerPageComponent } from './ui-template-progress-spinner-page.component';

let component: any;
function init(): void {
  component = new UiTemplateProgressSpinnerPageComponent();
}

describe('UiTemplateProgressSpinnerPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
