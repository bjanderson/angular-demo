import { UiTemplateSelectPageComponent } from './ui-template-select-page.component';

let component: any;
function init(): void {
  component = new UiTemplateSelectPageComponent();
}

describe('UiTemplateSelectPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
