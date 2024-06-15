import { UiTemplateChipsPageComponent } from './ui-template-chips-page.component';

let component: any;
function init(): void {
  component = new UiTemplateChipsPageComponent();
}

describe('UiTemplateChipsPageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
