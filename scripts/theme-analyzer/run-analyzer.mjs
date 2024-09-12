import { generateHtml } from './generate-html.mjs';
import { generateMaterialCss } from './generate-material-css.mjs';
import { createMyPalettes } from './map-palettes.mjs';

// The point of this whole thing is to figure out what colors the Angular Material theme actually uses.
// Once you identify what colors it actually uses, then you can start to customize the colors in a meaningful way for use in your app.
// This script was not created on a whim. It is the result of a lot of digging and trying to understand what the heck Angular is doing.

// First run the sass compiler to generate the actual css of the angular material theme.
generateMaterialCss();

// Then figure what colors are used in the css,
// where they are in the given palettes,
// and create a new palette that replaces each unused color with a unique shade of magenta.
// The idea is, if you see magenta show up in your UI, then you will be able to locate the unique
// theme color that it corresponds to, and change it to something else.
createMyPalettes();

// As an added bonus, automatically update the colors displayed in the app ui to make it easy to
// identify, at a glance, what colors are being used.
generateHtml();
