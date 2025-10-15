import {
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MatAutocompleteDefaultOptions,
} from '@angular/material/autocomplete';

export const DEFAULT_AUTOCOMPLETE_OPTIONS: MatAutocompleteDefaultOptions = {
  autoActiveFirstOption: false,
  autoSelectActiveOption: false,
  hideSingleSelectionIndicator: true,
  overlayPanelClass: [],
  requireSelection: true,
};

export const matAutocompleteConfigProvider = {
  provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  useValue: DEFAULT_AUTOCOMPLETE_OPTIONS,
};
