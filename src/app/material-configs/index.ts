import { makeEnvironmentProviders } from '@angular/core';
import { matAutocompleteConfigProvider } from './mat-autocomplete.config';
import { matButtonToggleConfigProvider } from './mat-button-toggle.config';
import { matButtonConfigProvider } from './mat-button.config';
import { matCardConfigProvider } from './mat-card.config';
import { matCheckboxConfigProvider } from './mat-checkbox.config';
import { matChipsConfigProvider } from './mat-chips.config';
import { matDialogConfigProvider } from './mat-dialog.config';
import { matExpansionPanelConfigProvider } from './mat-expansion-panel.config';
import { matPaginatorConfigProvider } from './mat-paginator.config';

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
    matPaginatorConfigProvider,
  ]);
}
