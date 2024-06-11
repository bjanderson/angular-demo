import { UiTemplateAutocompletePageComponent } from './ui-template-autocomplete-page.component';

let component: any;
function init(): void {
  component = new UiTemplateAutocompletePageComponent();
}

describe('UiTemplateAutocompletePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
