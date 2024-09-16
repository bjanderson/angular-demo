# Angular Material Style Updates

## Theme

The theme went from using 12 out of 42 colors to using 65 out of 96 colors - and many times with added opacity.

I created a script to analyze the theme colors vs what is actually used in the generated css, and figured out all the colors that we can set, as well as what opacities they are used with.

It's a complicated process, but the result can be seen in the ui-template-colors-page. (#/ui-template/colors)

The colors for the theme are located in two files. The theme uses all of the levels in the primary palette, and only the top-level of the tertiary palette. That is to say, the secondary, neutral, etc... levels in the tertiary palette are never used.

The palettes are located at:

- src/styles/material-theme/palettes/\_app-primary-palette.scss
- src/styles/material-theme/palettes/\_app-tertiary-palette.scss

**If you want to modify the theme colors, modify them in those files.**

The theme, density, and typography are defined in three separate files at:

- src/styles/material-theme/\_ui-density.scss
- src/styles/material-theme/\_ui-theme.scss
- src/styles/material-theme/\_ui-typography.scss

The theme imports the density and typography. It was just cleaner to put those in separate files while I was figure out how to analyze the theme stuff.

All of that is used in src/material.scss, which is imported via the angular.json config.

## CSS Design Tokens

Angular Material generates about 850 CSS Design Tokens. You can use them to customize your component styles.

Since they also changed the default look of most components, you will have to customize them if you want them to look how they used to in previous versions.

Everything has to be referenced at least inside of the :root selector - otherwise it will not be applied, and you will be left wondering why your settings are not taking effect. The CSS Design Tokens have to be referenced inside a CSS selector, just like any other css settings...

The src/styles/material-overrides folder contains a separate file for each Angular Material component. Each file has it's respective CSS Design Tokens, and some other default css that Angular defines commented out inside.

If you want to change the default look and feel, or make any targeted styles, you can reference these files for the relevant css tokens for each respective component.
