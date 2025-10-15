import { makeEnvironmentProviders } from '@angular/core';
import { matAutocompleteConfigProvider } from './mat-autocomplete.config';
import { matButtonToggleConfigProvider } from './mat-button-toggle.config';
import { matButtonConfigProvider } from './mat-button.config';
import { matCardConfigProvider } from './mat-card.config';
import { matCheckboxConfigProvider } from './mat-checkbox.config';
import { matChipsConfigProvider } from './mat-chips.config';
import { matDialogConfigProvider } from './mat-dialog.config';
import { matExpansionPanelConfigProvider } from './mat-expansion-panel.config';
import { matFormFieldConfigProvider } from './mat-form-field.config';
import { matIconConfigProvider } from './mat-icon.config';
import { matMenuConfigProvider } from './mat-menu.config';
import { matPaginatorConfigProvider } from './mat-paginator.config';
import { matProgressBarConfigProvider } from './mat-progress-bar.config';
import { matProgressSpinnerConfigProvider } from './mat-progress-spinner.config';
import { matSlideToggleConfigProvider } from './mat-slide-toggle.config';
import { matSnackBarConfigProvider } from './mat-snack-bar.config';
import { matSortConfigProvider } from './mat-sort.config';
import { matTabsConfigProvider } from './mat-tabs.config';

export function provideMaterialConfigs() {
  return makeEnvironmentProviders([
    matAutocompleteConfigProvider,
    matButtonConfigProvider,
    matButtonToggleConfigProvider,
    matCardConfigProvider,
    matCheckboxConfigProvider,
    matChipsConfigProvider,
    matDialogConfigProvider,
    matExpansionPanelConfigProvider,
    matFormFieldConfigProvider,
    matIconConfigProvider,
    matMenuConfigProvider,
    matPaginatorConfigProvider,
    matProgressBarConfigProvider,
    matProgressSpinnerConfigProvider,
    matSlideToggleConfigProvider,
    matSnackBarConfigProvider,
    matSortConfigProvider,
    matTabsConfigProvider,
  ]);
}
