import { HomePageComponent } from './home-page.component';

let component: any;
function init(): void {
  component = new HomePageComponent();
}

describe('HomePageComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
