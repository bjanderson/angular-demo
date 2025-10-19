import { matIconRegistry } from 'src/mocks/@angular/material/mat-icon.mock';
import { AppComponent } from './app.component';

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
