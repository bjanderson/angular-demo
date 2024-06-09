import { AppNavComponent } from './app-nav.component';

let component: any;
function init(): void {
  component = new AppNavComponent();
}

describe('AppNavComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
