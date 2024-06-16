import { getPath, readFile, writeFile } from './file-io.mjs';

/**
 * README
 * 1. Set the theme you want to analyze in src/material.scss.
 * 2. Run 'npm run sass:material' to generate the css output of that theme.
 * 3. Run 'node scripts/analyze-material-css.mjs' to run this file.
 * 4. Check tmp/_material-colors.scss for the modified color palette that has different shades of magenta for each un-used color in the palette.
 * 5. If you saved changes to the tmp/material.css file, then you will have to regenerate it for the rgba->hex part of this script to work.
 */

const rgbaRe = /(rgba\()(\d+, \d+, \d+, \d+(\.\d+)?\))/g;

const materialScssPath = getPath(['src', 'styles', 'material-theme', '_ui-base-theme.scss']);
const materialScss = readFile(materialScssPath);

const materialCssPath = getPath(['tmp', 'material.css']);
let materialCss = readFile(materialCssPath);

const allRGBA = Array.from(materialCss.matchAll(rgbaRe))
  .map((m) => (m ? m[0] : null))
  .filter((v, i, a) => v != null && a.indexOf(v) === i);

const rgbaToHex = (rgba) => {
  const nums = rgba
    .slice(5, rgba.length - 1)
    .split(',')
    .map((s) => s.trim());
  nums[3] = Math.round(255 * [parseFloat(nums[3])]);
  const hex = nums.map((n) => `00${Number(n).toString(16)}`.slice(-2)).join('');
  return `#${hex}`;
};

allRGBA.forEach((c) => {
  c = c.replace('(', '\\(').replace(')', '\\)');
  const re = RegExp(c, 'g');
  materialCss = materialCss.replace(re, rgbaToHex);
});

const getFoundCounts = (scss) => {
  const colors = scss
    ?.replace(/,/g, '')
    .split(':')
    .map((x) => x.split('\n')[0].trim())
    .filter((x) => x != null && x.includes('#'));

  const foundInCss = colors.map((c) => {
    const re = RegExp(c, 'g');
    const len = Array.from(materialCss.matchAll(re)).length;
    return { color: c, count: len };
  });

  return foundInCss;
};

const r = '#ff';
let g = 0;
let b = -1;

const getMagenta = () => {
  return `${r}0${g}f${Number(b).toString(16)}`;
};

let used = 0;
let unused = 0;
const getColors = (found) => {
  const colors = found.map((c) => {
    b += 1;

    if (c.count === 0) {
      unused += 1;
      return getMagenta();
    }

    used += 1;
    return c.color;
  });

  g += 1;
  b = -1;

  return colors;
};

const paletteNames = [
  '$primary',
  '$secondary',
  '$tertiary',
  '$neutral',
  '$neutral-variant',
  '$error',
];

const palettes = [];
paletteNames.forEach((p, i) => {
  const begin = p;
  const end = paletteNames[i + 1] || '$_palettes';
  const scss = materialScss.split(begin)[1].split(end)[0];
  const found = getFoundCounts(scss);
  const palette = getColors(found);
  palettes.push(palette);
});

const generateScss = () => {
  const styles = paletteNames.map((p, i) => {
    let indices = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];
    if (p === '$neutral') {
      indices = [...indices, 4, 6, 12, 17, 22, 24, 87, 92, 94, 96];
    }
    const x = palettes[i].map((c, i) => `${indices[i]}: ${c}`);
    return `${p}: (\n${x.join(',\n')}\n)`;
  });

  let scss = styles.join(';\n');
  return scss + ';';
};

const scss = generateScss();
const materialColorsPath = getPath(['tmp', '_material-colors.scss']);
writeFile(materialColorsPath, scss, true);

// comment this out if you don't want to save the rgba -> hex conversions in your material.css file
writeFile(materialCssPath, materialCss, true);

// console.log(scss);
console.log('used colors :>> ', used);
console.log('unused colors :>> ', unused);
