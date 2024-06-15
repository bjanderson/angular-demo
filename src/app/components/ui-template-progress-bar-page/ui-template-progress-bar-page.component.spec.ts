import { UiTemplateProgressBarPageComponent } from './ui-template-progress-bar-page.component';

let component: any;
function init(): void {
  component = new UiTemplateProgressBarPageComponent();
}

describe('UiTemplateProgressBarPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
