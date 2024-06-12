import { getPath, readFile } from './file-io.mjs';

const rgbaRe = /(rgba\()(\d+, \d+, \d+, \d+(\.\d+)?\))/g;

const materialScssPath = getPath(['src', 'styles', 'material-theme', '_ui-custom-theme-2.scss']);
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
  nums[3] = Math.floor(255 * [parseFloat(nums[3])]);
  const hex = nums.map((n) => Number(n).toString(16)).join('');
  return `#${hex}`;
};

allRGBA.forEach((c) => {
  c = c.replace('(', '\\(').replace(')', '\\)');
  const re = RegExp(c, 'g');
  materialCss = materialCss.replace(re, rgbaToHex);
});

// console.log('materialCss :>> ', materialCss);

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
let b = 0;

const getMagenta = () => {
  return `${r}0${g}f${Number(b).toString(16)}`;
};

const getColors = (found) => {
  const colors = found.map((c) => {
    if (c.count === 0) {
      return getMagenta();
    }
    b += 1;
    return c.color;
  });

  g += 1;
  b = 0;

  return colors;
};

const palettes = [];
const primaryScss = materialScss.split('$primary')[1].split('$secondary')[0];
const foundInPrimary = getFoundCounts(primaryScss);
const primaryPalette = getColors(foundInPrimary);
palettes.push(primaryPalette);
console.log('primaryPalette :>> ', primaryPalette);

const secondaryScss = materialScss.split('$secondary')[1].split('$tertiary')[0];
const foundInSecondary = getFoundCounts(secondaryScss);
const secondaryPalette = getColors(foundInSecondary);
palettes.push(secondaryPalette);
console.log('secondaryPalette :>> ', secondaryPalette);

const tertiaryScss = materialScss.split('$tertiary')[1].split('$neutral')[0];
const foundInTertiary = getFoundCounts(tertiaryScss);
const tertiaryPalette = getColors(foundInTertiary);
palettes.push(tertiaryPalette);
console.log('tertiaryPalette :>> ', tertiaryPalette);

const neutralScss = materialScss.split('$neutral')[1].split('$neutral-variant')[0];
const foundInNeutral = getFoundCounts(neutralScss);
const neutralPalette = getColors(foundInNeutral);
palettes.push(neutralPalette);
console.log('neutralPalette :>> ', neutralPalette);

const neutralvariantScss = materialScss.split('$neutral-variant')[1].split('$error')[0];
const foundInNeutralVariant = getFoundCounts(neutralvariantScss);
const neutralvariantPalette = getColors(foundInNeutralVariant);
palettes.push(neutralvariantPalette);
console.log('neutralvariantPalette :>> ', neutralvariantPalette);

const errorScss = materialScss.split('$error')[1].split('$_palettes')[0];
const foundInError = getFoundCounts(errorScss);
const errorPalette = getColors(foundInError);
palettes.push(errorPalette);
console.log('errorPalette :>> ', errorPalette);

const indices = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];
const paletteNames = [
  '$primary',
  '$secondary',
  '$tertiary',
  '$neutral',
  '$neutral-variant',
  '$error',
];
const generateScss = () => {
  const styles = paletteNames.map((p, i) => {
    let x = palettes[i].map((c, i) => `${indices[i]}: ${c}`);
    return `${p}: (\n${x.join(',\n')}\n)`;
  });

  let scss = styles.join(';\n');
  return scss + ';';
};

const scss = generateScss();
console.log('scss :>> ', scss);
