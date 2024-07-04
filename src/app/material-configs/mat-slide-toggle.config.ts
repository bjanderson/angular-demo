import {
  MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  MatSlideToggleDefaultOptions,
} from '@angular/material/slide-toggle';

const DEFAULT_SLIDE_TOGGLE_OPTIONS: MatSlideToggleDefaultOptions = {
  disableToggleValue: false,
  hideIcon: false,
};

export const matSlideToggleConfigProvider = {
  provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  useValue: DEFAULT_SLIDE_TOGGLE_OPTIONS,
};
