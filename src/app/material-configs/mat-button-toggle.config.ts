import {
  MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,
  MatButtonToggleDefaultOptions,
} from '@angular/material/button-toggle';

export const DEFAULT_BUTTON_TOGGLE_OPTIONS: MatButtonToggleDefaultOptions = {
  appearance: 'standard',
  hideMultipleSelectionIndicator: true,
  hideSingleSelectionIndicator: true,
};

export const matButtonToggleConfigProvider = {
  provide: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,
  useValue: DEFAULT_BUTTON_TOGGLE_OPTIONS,
};
