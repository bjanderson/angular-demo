import { readFile, writeFile } from '../file-io.mjs';
import {
  getColorPaletteLevels,
  groups,
  mapMyPrimaryPalette,
  mapMyTertiaryPalette,
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
  const myPrimaryPalette = mapMyPrimaryPalette();
  console.log('myPrimaryPalette :>> ', myPrimaryPalette);
  groups.forEach((group) => {
    html += `<div class="col mrl0-5">`;
    html += `<h3>${group}</h3>`;
    const levels = Object.keys(myPrimaryPalette[group]);
    levels.forEach((level) => {
      html += `<div class="row color" style="background: ${myPrimaryPalette[group][level]}">
      <span style="background: #ffffff66">${level}: ${myPrimaryPalette[group][level]}</span>
    </div>`;
    });
    html += `</div>`;
  });

  const myTertiaryPalette = mapMyTertiaryPalette();
  html += `<div class="col mrl0-5">\n`;
  html += `<h3>tertiary</h3>`;
  const levels = Object.keys(myTertiaryPalette.primary);
  levels.forEach((level) => {
    html += `<div class="row color" style="background: ${myTertiaryPalette.primary[level]}">
      <span style="background: #ffffff66">${level}: ${myTertiaryPalette.primary[level]}</span>
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
