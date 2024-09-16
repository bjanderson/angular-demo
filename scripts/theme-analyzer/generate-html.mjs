import { readFile, writeFile } from '../file-io.mjs';
import {
  getColorPaletteLevels,
  groups,
  mapAppPrimaryPalette,
  mapAppTertiaryPalette,
} from './map-palettes.mjs';

const componentFileName =
  'src/app/components/ui-template-colors-page/ui-template-colors-page.component.html';

const materialRe = /<!-- StartMaterialThemeColors -->[\s\S]*<!-- EndMaterialThemeColors -->/g;
const cssRe = /<!-- StartCSSColors -->[\s\S]*<!-- EndCSSColors -->/g;

generateHtml();

export function generateHtml() {
  let componentFile = readFile(componentFileName);
  componentFile = componentFile.replace(materialRe, generateMaterialHtml());
  componentFile = componentFile.replace(cssRe, generateCssHtml());
  writeFile(componentFileName, componentFile, true);
}

function generateMaterialHtml() {
  let html = `<!-- StartMaterialThemeColors -->\n
  <div class="row flex-wrap">\n`;
  const appPrimaryPalette = mapAppPrimaryPalette();
  console.log('appPrimaryPalette :>> ', appPrimaryPalette);
  groups.forEach((group) => {
    html += `<div class="col mrl0-5">`;
    html += `<h3>${group}</h3>`;
    const levels = Object.keys(appPrimaryPalette[group]);
    levels.forEach((level) => {
      html += `<div class="row color" style="background: ${appPrimaryPalette[group][level]}">
      <span style="background: #ffffff66">${level}: ${appPrimaryPalette[group][level]}</span>
    </div>`;
    });
    html += `</div>`;
  });

  const appTertiaryPalette = mapAppTertiaryPalette();
  html += `<div class="col mrl0-5">\n`;
  html += `<h3>tertiary</h3>`;
  const levels = Object.keys(appTertiaryPalette.primary);
  levels.forEach((level) => {
    html += `<div class="row color" style="background: ${appTertiaryPalette.primary[level]}">
      <span style="background: #ffffff66">${level}: ${appTertiaryPalette.primary[level]}</span>
    </div>`;
  });
  html += `</div>`;

  html += `</div>
  <!-- EndMaterialThemeColors -->\n`;
  return html;
}

function generateCssHtml() {
  let html = `<!-- StartCSSColors -->`;

  const colorPaletteLevels = getColorPaletteLevels();
  const groups = [
    'primary.primary',
    'primary.secondary',
    'tertiary.primary',
    'primary.error',
    'primary.neutral.',
    'primary.neutralVariant',
  ];
  groups.forEach((group) => {
    html += `<h4>${group}</h4>
    <div class="row flex-wrap mb1">`;
    const subset = Object.keys(colorPaletteLevels).filter((k) => k.startsWith(group));
    // const keys = Object.keys(colorPaletteLevels);
    console.log('subset :>> ', subset);
    subset.forEach((key) => {
      html += generateColors(key, colorPaletteLevels[key]);
    });
    html += `</div>`;
  });

  html += `<!-- EndCSSColors -->\n`;
  return html;
}

function generateColors(key, colors) {
  let html = `<div class="col mrl0-5">`;
  html += `<div>${key}</div>`;
  colors.forEach((color) => {
    html += `<div class="row color" style="background: ${color}">
      <span style="background: #ffffff66">${color}</span>
    </div>`;
  });
  html += `</div>`;
  return html;
}
