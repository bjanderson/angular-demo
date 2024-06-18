import { getPath, readFile, writeFile } from './file-io.mjs';

/**
 * README
 * 1. Set the theme you want to analyze in src/material.scss.
 * 2. Run 'npm run sass:material' to generate the css output of that theme.
 * 3. Run 'node scripts/analyze-material-colors.mjs' to run this file.
 * 4. Check tmp/_material-colors.scss for the modified color palette that has different shades of magenta for each un-used color in the palette.
 * 5. If you saved changes to the tmp/material.css file, then you will have to regenerate it for the rgba->hex part of this script to work.
 */

const rgbaRe = /(rgba\()(\d+, \d+, \d+, \d+(\.\d+)?\))/g;
const hexRe = /#[a-z0-9]{3,8}/g;

(function run() {
  const allPaletteColors = getAllPaletteColors();
  const themeColors = getThemeColors();
  const usedColors = getUsedColors(allPaletteColors, themeColors);
  showStats(themeColors, usedColors);

  const myPrimaryPalette = mapMyPrimaryPalette(usedColors);
  const myPrimaryPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_my-primary-palette.scss',
  ]);
  writeFile(myPrimaryPalettePath, myPrimaryPalette, true);

  const myTertiaryPalette = mapMyTertiaryPalette(usedColors);
  const myTertiaryPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_my-tertiary-palette.scss',
  ]);
  writeFile(myTertiaryPalettePath, myTertiaryPalette, true);

  createHTML(themeColors);
})();

function showStats(themeColors, usedColors) {
  const missedColors = themeColors.filter((c) => !usedColors.includes(c));
  const duplicateColors = usedColors.filter((v, i, a) => a.indexOf(v) !== i);

  const opacityColors = themeColors
    .filter((c) => c.length === 9)
    .filter((v, i, a) => a.indexOf(v) === i);
  const colorsUsedWithOpacity = opacityColors
    .map((c) => c.slice(0, 7))
    .filter((v, i, a) => a.indexOf(v) === i);

  const uniqueColors = themeColors
    .map((c) => c.slice(0, 7))
    .filter((v, i, a) => a.indexOf(v) === i);

  const colorsUsedWithoutOpacity = uniqueColors.filter((c) => !colorsUsedWithOpacity.includes(c));

  console.log('themeColors :>> ', themeColors, themeColors.length);
  console.log('');
  console.log('usedColors :>> ', usedColors, usedColors.length);
  console.log('');
  console.log('missedColors :>> ', missedColors, missedColors.length);
  console.log('');
  console.log('duplicateColors :>> ', duplicateColors, duplicateColors.length);
  console.log('');
  console.log('opacityColors :>> ', opacityColors, opacityColors.length);
  console.log('');
  console.log('colorsUsedWithOpacity :>> ', colorsUsedWithOpacity, colorsUsedWithOpacity.length);
  console.log('');
  console.log(
    'colorsUsedWithoutOpacity :>> ',
    colorsUsedWithoutOpacity,
    colorsUsedWithoutOpacity.length,
  );
  console.log('');
  console.log('uniqueColors :>> ', uniqueColors, uniqueColors.length);
  console.log('');
}

function getAllPaletteColors() {
  const allPalettesPath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_all-palettes.scss',
  ]);
  const allPalettes = readFile(allPalettesPath);
  const colors = Array.from(allPalettes.matchAll(hexRe))
    .join('\n')
    .split('\n')
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();
  return colors;
}

function getThemeColors() {
  const materialCssPath = getPath(['tmp', 'material.css']);
  const materialCss = readFile(materialCssPath);
  const css = convertRGBAtoHex(materialCss);
  const colors = Array.from(css.matchAll(hexRe))
    .join('\n')
    .split('\n')
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();
  return colors;
}

function convertRGBAtoHex(css) {
  const allRGBA = Array.from(css.matchAll(rgbaRe))
    .map((m) => (m ? m[0] : null))
    .filter((v, i, a) => v != null && a.indexOf(v) === i);

  allRGBA.forEach((c) => {
    c = c.replace('(', '\\(').replace(')', '\\)');
    const re = RegExp(c, 'g');
    css = css.replace(re, rgbaToHex);
  });
  return css;
}

function rgbaToHex(rgba) {
  const nums = rgba
    .slice(5, rgba.length - 1)
    .split(',')
    .map((s) => s.trim());
  nums[3] = Math.round(255 * [parseFloat(nums[3])]);
  const hex = nums.map((n) => `00${Number(n).toString(16)}`.slice(-2)).join('');
  return `#${hex}`;
}

function getUsedColors(allPaletteColors, themeColors) {
  let colors = [];
  allPaletteColors.forEach((c) => {
    colors.push(...themeColors.filter((t) => t.includes(c)));
  });
  colors = colors.filter((v, i, a) => v != null && a.indexOf(v) === i);
  return colors;
}

function getPrimaryMagentaPalette() {
  const primaryMagentaPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_primary-magenta-palette.scss',
  ]);
  const primaryMagentaPalette = readFile(primaryMagentaPalettePath);
  return primaryMagentaPalette;
}

function getTertiaryMagentaPalette() {
  const tertiaryMagentaPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_tertiary-magenta-palette.scss',
  ]);
  const tertiaryMagentaPalette = readFile(tertiaryMagentaPalettePath);
  return tertiaryMagentaPalette;
}

function getPrimaryPalette() {
  const primaryPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_primary-palette.scss',
  ]);
  const primaryPalette = readFile(primaryPalettePath);
  return primaryPalette;
}

function getTertiaryPalette() {
  const tertiaryPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_tertiary-palette.scss',
  ]);
  const tertiaryPalette = readFile(tertiaryPalettePath);
  return tertiaryPalette;
}

function mapMyPrimaryPalette(usedColors) {
  const primaryMagentaLines = getPrimaryMagentaPalette().split('\n');
  const primaryLines = getPrimaryPalette().split('\n');

  const myPrimaryPaletteLines = ['$my-primary-palette: ('];

  primaryLines.forEach((p, i) => {
    if (i > 0) {
      if (hexFilter(p, usedColors)) {
        myPrimaryPaletteLines.push(p);
      } else {
        myPrimaryPaletteLines.push(primaryMagentaLines[i]);
      }
    }
  });

  return myPrimaryPaletteLines.join('\n');
}

function mapMyTertiaryPalette(usedColors) {
  const tertiaryMagentaLines = getTertiaryMagentaPalette().split('\n');
  const tertiaryLines = getTertiaryPalette().split('\n');

  const myTertiaryPaletteLines = ['$my-tertiary-palette: ('];

  tertiaryLines.forEach((t, i) => {
    if (i > 0) {
      if (hexFilter(t, usedColors)) {
        myTertiaryPaletteLines.push(t);
      } else {
        myTertiaryPaletteLines.push(tertiaryMagentaLines[i]);
      }
    }
  });

  return myTertiaryPaletteLines.join('\n');
}

function hexFilter(text, usedColors) {
  const isHex = text.includes('#');
  if (!isHex) {
    return true;
  }

  const hex = text.match(hexRe)[0];
  return usedColors.includes(hex);
}

function createHTML(themeColors) {
  const template = `<div class="row color" style="background: THEME_COLOR;"><span style="background: #ffffff66">THEME_COLOR</span></div>`;
  const re = RegExp('THEME_COLOR', 'g');
  const lines = themeColors.map((c, i) => {
    let str = template.replace(re, c);
    return str;
  });

  let html = `<div class="col mrl0-5">`;
  lines.forEach((l, i) => {
    if (i % 10 === 0) {
      html += `</div>\n<div class="col mrl0-5">\n`;
    }
    html += l;
  });
  html += `</div>
  `;

  const outputHtmlPath = getPath(['tmp', 'output.html']);
  writeFile(outputHtmlPath, html, true);
}
