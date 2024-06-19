import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./components/home-page').then((c) => c.HomePageComponent),
  },

  {
    path: 'ui-template',
    // loadComponent: () =>
    //   import('./components/ui-template-page').then((c) => c.UiTemplatePageComponent),
    children: [
      {
        path: 'colors',
        loadComponent: () =>
          import('./components/ui-template-colors-page').then(
            (c) => c.UiTemplateColorsPageComponent,
          ),
      },

      {
        path: 'autocomplete',
        loadComponent: () =>
          import('./components/ui-template-autocomplete-page').then(
            (c) => c.UiTemplateAutocompletePageComponent,
          ),
      },

      {
        path: 'badge',
        loadComponent: () =>
          import('./components/ui-template-badge-page').then((c) => c.UiTemplateBadgePageComponent),
      },

      {
        path: 'bottom-sheet',
        loadComponent: () =>
          import('./components/ui-template-bottom-sheet-page').then(
            (c) => c.UiTemplateBottomSheetPageComponent,
          ),
      },

      {
        path: 'button-toggle',
        loadComponent: () =>
          import('./components/ui-template-button-toggle-page').then(
            (c) => c.UiTemplateButtonTogglePageComponent,
          ),
      },

      {
        path: 'buttons',
        loadComponent: () =>
          import('./components/ui-template-buttons-page').then(
            (c) => c.UiTemplateButtonsPageComponent,
          ),
      },

      {
        path: 'card',
        loadComponent: () =>
          import('./components/ui-template-card-page').then((c) => c.UiTemplateCardPageComponent),
      },

      {
        path: 'checkbox',
        loadComponent: () =>
          import('./components/ui-template-checkbox-page').then(
            (c) => c.UiTemplateCheckboxPageComponent,
          ),
      },

      {
        path: 'chips',
        loadComponent: () =>
          import('./components/ui-template-chips-page').then((c) => c.UiTemplateChipsPageComponent),
      },

      {
        path: 'datepicker',
        loadComponent: () =>
          import('./components/ui-template-datepicker-page').then(
            (c) => c.UiTemplateDatepickerPageComponent,
          ),
      },

      {
        path: 'dialog',
        loadComponent: () =>
          import('./components/ui-template-dialog-page').then(
            (c) => c.UiTemplateDialogPageComponent,
          ),
      },

      {
        path: 'expansion-panel',
        loadComponent: () =>
          import('./components/ui-template-expansion-panel-page').then(
            (c) => c.UiTemplateExpansionPanelPageComponent,
          ),
      },

      {
        path: 'form-field',
        loadComponent: () =>
          import('./components/ui-template-form-field-page').then(
            (c) => c.UiTemplateFormFieldPageComponent,
          ),
      },

      {
        path: 'grid-list',
        loadComponent: () =>
          import('./components/ui-template-grid-list-page').then(
            (c) => c.UiTemplateGridListPageComponent,
          ),
      },

      {
        path: 'icon',
        loadComponent: () =>
          import('./components/ui-template-icon-page').then((c) => c.UiTemplateIconPageComponent),
      },

      {
        path: 'input',
        loadComponent: () =>
          import('./components/ui-template-input-page').then((c) => c.UiTemplateInputPageComponent),
      },

      {
        path: 'list',
        loadComponent: () =>
          import('./components/ui-template-list-page').then((c) => c.UiTemplateListPageComponent),
      },

      {
        path: 'menu',
        loadComponent: () =>
          import('./components/ui-template-menu-page').then((c) => c.UiTemplateMenuPageComponent),
      },

      {
        path: 'progress-bar',
        loadComponent: () =>
          import('./components/ui-template-progress-bar-page').then(
            (c) => c.UiTemplateProgressBarPageComponent,
          ),
      },

      {
        path: 'progress-spinner',
        loadComponent: () =>
          import('./components/ui-template-progress-spinner-page').then(
            (c) => c.UiTemplateProgressSpinnerPageComponent,
          ),
      },

      {
        path: 'radio-button',
        loadComponent: () =>
          import('./components/ui-template-radio-button-page').then(
            (c) => c.UiTemplateRadioButtonPageComponent,
          ),
      },

      {
        path: 'select',
        loadComponent: () =>
          import('./components/ui-template-select-page').then(
            (c) => c.UiTemplateSelectPageComponent,
          ),
      },

      {
        path: 'slide-toggle',
        loadComponent: () =>
          import('./components/ui-template-slide-toggle-page').then(
            (c) => c.UiTemplateSlideTogglePageComponent,
          ),
      },

      {
        path: 'slider',
        loadComponent: () =>
          import('./components/ui-template-slider-page').then(
            (c) => c.UiTemplateSliderPageComponent,
          ),
      },

      {
        path: 'snackbar',
        loadComponent: () =>
          import('./components/ui-template-snackbar-page').then(
            (c) => c.UiTemplateSnackbarPageComponent,
          ),
      },

      {
        path: 'stepper',
        loadComponent: () =>
          import('./components/ui-template-stepper-page').then(
            (c) => c.UiTemplateStepperPageComponent,
          ),
      },

      {
        path: 'table',
        loadComponent: () =>
          import('./components/ui-template-table-page').then((c) => c.UiTemplateTablePageComponent),
      },

      {
        path: 'tabs',
        loadComponent: () =>
          import('./components/ui-template-tabs-page').then((c) => c.UiTemplateTabsPageComponent),
      },

      {
        path: 'toolbar',
        loadComponent: () =>
          import('./components/ui-template-toolbar-page').then(
            (c) => c.UiTemplateToolbarPageComponent,
          ),
      },

      {
        path: 'tooltip',
        loadComponent: () =>
          import('./components/ui-template-tooltip-page').then(
            (c) => c.UiTemplateTooltipPageComponent,
          ),
      },

      {
        path: 'tree',
        loadComponent: () =>
          import('./components/ui-template-tree-page').then((c) => c.UiTemplateTreePageComponent),
      },

      {
        path: 'typography',
        loadComponent: () =>
          import('./components/ui-template-typography-page').then(
            (c) => c.UiTemplateTypographyPageComponent,
          ),
      },
    ],
  },
];
