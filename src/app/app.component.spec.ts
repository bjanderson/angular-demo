import { AppComponent } from './app.component';

const matIconRegistry: any = {
  setDefaultFontSetClass: () => undefined,
};

let component: any;
function init(): void {
  component = new AppComponent(matIconRegistry);
}

describe('AppComponent()', () => {
  beforeEach(() => {
    init();
  });

  it('constructor', () => {
    expect(component).toBeDefined();
  });
});
