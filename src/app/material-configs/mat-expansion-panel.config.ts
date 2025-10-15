import {
  MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
  MatExpansionPanelDefaultOptions,
} from '@angular/material/expansion';

export const DEFAULT_EXPANSION_PANEL_OPTIONS: MatExpansionPanelDefaultOptions = {
  collapsedHeight: '2rem',
  expandedHeight: '10rem',
  hideToggle: false,
};

export const matExpansionPanelConfigProvider = {
  provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
  useValue: DEFAULT_EXPANSION_PANEL_OPTIONS,
};
