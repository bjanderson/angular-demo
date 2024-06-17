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
  const allPalettesPath = getPath(['src', 'styles', 'material-theme', '_all-palettes.scss']);
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

function getMyMagentaPalette() {
  const myMagentaPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_my-magenta-palette.scss',
  ]);
  const myMagentaPalette = readFile(myMagentaPalettePath);
  return myMagentaPalette;
}

function getMyMagenta2Palette() {
  const myMagentaPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_my-magenta-2-palette.scss',
  ]);
  const myMagentaPalette = readFile(myMagentaPalettePath);
  return myMagentaPalette;
}

function getBluePalette() {
  const bluePalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_blue-palette.scss',
  ]);
  const bluePalette = readFile(bluePalettePath);
  return bluePalette;
}

function getCyanPalette() {
  const cyanPalettePath = getPath([
    'src',
    'styles',
    'material-theme',
    'palettes',
    '_cyan-palette.scss',
  ]);
  const cyanPalette = readFile(cyanPalettePath);
  return cyanPalette;
}

function mapMyPrimaryPalette(usedColors) {
  const myMagentaLines = getMyMagentaPalette().split('\n');
  const blueLines = getBluePalette().split('\n');

  const myPrimaryPaletteLines = ['$my-primary-palette: ('];

  blueLines.forEach((b, i) => {
    if (i > 0) {
      if (hexFilter(b, usedColors)) {
        myPrimaryPaletteLines.push(b);
      } else {
        myPrimaryPaletteLines.push(myMagentaLines[i]);
      }
    }
  });

  return myPrimaryPaletteLines.join('\n');
}

function mapMyTertiaryPalette(usedColors) {
  const myMagenta2Lines = getMyMagenta2Palette().split('\n');
  const cyanLines = getCyanPalette().split('\n');

  const myTertiaryPaletteLines = ['$my-tertiary-palette: ('];

  cyanLines.forEach((c, i) => {
    if (i > 0) {
      if (hexFilter(c, usedColors)) {
        myTertiaryPaletteLines.push(c);
      } else {
        myTertiaryPaletteLines.push(myMagenta2Lines[i]);
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

// function writeOutput(obj) {
//   const outputPath = getPath(['tmp', 'output.txt']);
//   const text = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
//   writeFile(outputPath, text, true);
// }

// function getPalette(usedColors) {
//   const allPalettesPath = getPath(['src', 'styles', 'material-theme', '_all-palettes.scss']);
//   const allPalettes = readFile(allPalettesPath);
//   const lines = allPalettes.split('\n').filter((t) => hexFilter(t, usedColors));

//   return lines;
// }

// function old() {
//   const materialScssPath = getPath(['src', 'styles', 'material-theme', '_ui-base-theme.scss']);
//   const materialScss = readFile(materialScssPath);

//   const materialCssPath = getPath(['tmp', 'material.css']);
//   let materialCss = readFile(materialCssPath);

//   const allRGBA = Array.from(materialCss.matchAll(rgbaRe))
//     .map((m) => (m ? m[0] : null))
//     .filter((v, i, a) => v != null && a.indexOf(v) === i);

//   const rgbaToHex = (rgba) => {
//     const nums = rgba
//       .slice(5, rgba.length - 1)
//       .split(',')
//       .map((s) => s.trim());
//     nums[3] = Math.round(255 * [parseFloat(nums[3])]);
//     const hex = nums.map((n) => `00${Number(n).toString(16)}`.slice(-2)).join('');
//     return `#${hex}`;
//   };

//   allRGBA.forEach((c) => {
//     c = c.replace('(', '\\(').replace(')', '\\)');
//     const re = RegExp(c, 'g');
//     materialCss = materialCss.replace(re, rgbaToHex);
//   });

//   const getFoundCounts = (scss) => {
//     const colors = scss
//       ?.replace(/,/g, '')
//       .split(':')
//       .map((x) => x.split('\n')[0].trim())
//       .filter((x) => x != null && x.includes('#'));

//     const foundInCss = colors.map((c) => {
//       const re = RegExp(c, 'g');
//       const len = Array.from(materialCss.matchAll(re)).length;
//       return { color: c, count: len };
//     });

//     return foundInCss;
//   };

//   const r = '#ff';
//   let g = 0;
//   let b = -1;

//   const getMagenta = () => {
//     return `${r}0${g}f${Number(b).toString(16)}`;
//   };

//   let used = 0;
//   let unused = 0;
//   const getColors = (found) => {
//     const colors = found.map((c) => {
//       b += 1;

//       if (c.count === 0) {
//         unused += 1;
//         return getMagenta();
//       }

//       used += 1;
//       return c.color;
//     });

//     g += 1;
//     b = -1;

//     return colors;
//   };

//   const paletteNames = [
//     '$primary',
//     '$secondary',
//     '$tertiary',
//     '$neutral',
//     '$neutral-variant',
//     '$error',
//   ];

//   const palettes = [];
//   paletteNames.forEach((p, i) => {
//     const begin = p;
//     const end = paletteNames[i + 1] || '$_palettes';
//     const scss = materialScss.split(begin)[1].split(end)[0];
//     const found = getFoundCounts(scss);
//     const palette = getColors(found);
//     palettes.push(palette);
//   });

//   const generateScss = () => {
//     const styles = paletteNames.map((p, i) => {
//       let indices = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];
//       if (p === '$neutral') {
//         indices = [...indices, 4, 6, 12, 17, 22, 24, 87, 92, 94, 96];
//       }
//       const x = palettes[i].map((c, i) => `${indices[i]}: ${c}`);
//       return `${p}: (\n${x.join(',\n')}\n)`;
//     });

//     let scss = styles.join(';\n');
//     return scss + ';';
//   };

//   const scss = generateScss();
//   const outputPath = getPath(['tmp', 'output.scss']);
//   writeFile(outputPath, scss, true);

//   // comment this out if you don't want to save the rgba -> hex conversions in your material.css file
//   writeFile(materialCssPath, materialCss, true);

//   // console.log(scss);
//   console.log('used colors :>> ', used);
//   console.log('unused colors :>> ', unused);
// }
