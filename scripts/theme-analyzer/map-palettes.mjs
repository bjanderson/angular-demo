import { readFile, writeFile } from '../file-io.mjs';
import { getMaterialColors } from './read-material-colors.mjs';

export const groups = ['primary', 'secondary', 'neutral', 'neutralVariant', 'error'];

export function mapAppPrimaryPalette() {
  const fileName = 'src/styles/material-theme/palettes/_app-primary-palette.scss';
  return mapPalette(fileName, 'appPrimary');
}

export function mapAppTertiaryPalette() {
  const fileName = 'src/styles/material-theme/palettes/_app-tertiary-palette.scss';
  return mapPalette(fileName, 'appTertiary');
}

function mapPrimaryPalette() {
  const fileName = 'src/styles/material-theme/palettes/_primary-palette.scss';
  return mapPalette(fileName, 'primary');
}

function mapPrimaryMagentaPalette() {
  const fileName = 'src/styles/material-theme/palettes/_primary-magenta-palette.scss';
  return mapPalette(fileName, 'primaryMagenta');
}

function mapTertiaryPalette() {
  const fileName = 'src/styles/material-theme/palettes/_tertiary-palette.scss';
  return mapPalette(fileName, 'tertiary');
}

function mapTertiaryMagentaPalette() {
  const fileName = 'src/styles/material-theme/palettes/_tertiary-magenta-palette.scss';
  return mapPalette(fileName, 'tertiaryMagenta');
}

function mapPalette(fileName, name) {
  const primaryPalette = readFile(fileName);
  const palette = {
    name,
    primary: {},
    secondary: {},
    neutral: {},
    neutralVariant: {},
    error: {},
    colors: [],
  };
  const lines = primaryPalette.split('\n');
  let p = groups[0];
  lines.forEach((v, i) => {
    if (![0, 17, 34, 35, 62, 63, 80, 81, 98, 99, 100].includes(i)) {
      const j = v.split(':')[0].trim();
      const k = v.split(':')[1].replace(',', '').trim();
      palette[p][j] = k;
      palette.colors.push(k);
    }

    if (i === 17) {
      p = groups[1];
    } else if (i === 35) {
      p = groups[2];
    } else if (i === 63) {
      p = groups[3];
    } else if (i === 81) {
      p = groups[4];
    }
  });
  palette.colors.filter((v, i, a) => a.indexOf(v) === i).sort();
  return palette;
}

function getCssMap() {
  const materialColors = getMaterialColors();

  const palettes = [
    // mapAppPrimaryPalette(),
    // mapAppTertiaryPalette(),
    mapPrimaryPalette(),
    mapTertiaryPalette(),
    mapPrimaryMagentaPalette(),
    mapTertiaryMagentaPalette(),
  ];

  const cssMap = {};

  materialColors.forEach((color) => {
    const palette = palettes.find((p) => p.colors.find((c) => color.includes(c)) != null);
    if (palette == null) {
      cssMap[color] = 'Not Found';
    } else {
      cssMap[color] = palette.name;

      const group = groups.find(
        (g) => Object.values(palette[g]).find((c) => color.includes(c)) != null,
      );

      if (group != null) {
        cssMap[color] = `${palette.name}.${group}`;
        const key = Object.keys(palette[group]).find((k) => color.includes(palette[group][k]));

        if (key != null) {
          cssMap[color] = `${palette.name}.${group}.${key}`;
        }
      }
    }
  });
  return cssMap;
}

export function getColorPaletteLevels() {
  const cssMap = getCssMap();

  const tmp = {};
  Object.keys(cssMap).forEach((key) => {
    if (tmp[cssMap[key]] == null) {
      tmp[cssMap[key]] = [key];
    } else {
      tmp[cssMap[key]].push(key);
    }
  });

  return tmp;
}

function getUsedPaletteLevels() {
  const cssMap = getCssMap();

  const tmp = {};
  Object.keys(cssMap).forEach((key) => {
    if (tmp[cssMap[key]] == null) {
      tmp[cssMap[key]] = [key];
    } else {
      tmp[cssMap[key]].push(key);
    }
  });

  const keys = Object.keys(tmp);
  keys.sort();

  const usedPaletteLevels = {};
  keys.forEach((k) => {
    const palette = k.split('.')[0];
    const group = k.split('.')[1];
    const level = k.split('.')[2];
    if (usedPaletteLevels[palette] == null) {
      usedPaletteLevels[palette] = {};
    }

    if (usedPaletteLevels[palette][group] == null) {
      usedPaletteLevels[palette][group] = [];
    }

    usedPaletteLevels[palette][group].push(level);
    usedPaletteLevels[palette][group].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  });

  return usedPaletteLevels;
}

function createPrimaryPalette(usedPaletteLevels) {
  const primaryPalette = mapPrimaryPalette();
  const magentaPalette = mapPrimaryMagentaPalette();
  mapPalettes(usedPaletteLevels, primaryPalette, magentaPalette, 'primary');

  const scss = getScss('app-primary-palette', magentaPalette);

  const fileName = 'src/styles/material-theme/palettes/_app-primary-palette.scss';
  writeFile(fileName, scss, true);
}

function createTertiaryPalette(usedPaletteLevels) {
  const tertiaryPalette = mapTertiaryPalette();
  const magentaPalette = mapTertiaryMagentaPalette();
  mapPalettes(usedPaletteLevels, tertiaryPalette, magentaPalette, 'tertiary');

  const scss = getScss('app-tertiary-palette', magentaPalette);

  const fileName = 'src/styles/material-theme/palettes/_app-tertiary-palette.scss';
  writeFile(fileName, scss, true);
}

function mapPalettes(usedPaletteLevels, fromPalette, toPalette, paletteName) {
  groups.forEach((group) => {
    usedPaletteLevels[paletteName][group]?.forEach((level) => {
      toPalette.colors.splice(
        toPalette.colors.indexOf(toPalette[group][level]),
        1,
        fromPalette[group][level],
      );

      toPalette[group][level] = fromPalette[group][level];
    });
  });
}

function getScss(name, palette) {
  let scss = `$${name}: (\n`;
  Object.keys(palette.primary).forEach((key) => {
    scss += `  ${key}: ${palette.primary[key]}, \n`;
  });

  scss += `  secondary: (\n`;
  Object.keys(palette.secondary).forEach((key) => {
    scss += `    ${key}: ${palette.secondary[key]}, \n`;
  });

  scss += `  ),\n`;
  scss += `  neutral: (\n`;
  Object.keys(palette.neutral).forEach((key) => {
    scss += `    ${key}: ${palette.neutral[key]}, \n`;
  });

  scss += `  ),\n`;
  scss += `  neutral-variant: (\n`;
  Object.keys(palette.neutralVariant).forEach((key) => {
    scss += `    ${key}: ${palette.neutralVariant[key]}, \n`;
  });

  scss += `  ),\n`;
  scss += `  error: (\n`;
  Object.keys(palette.error).forEach((key) => {
    scss += `    ${key}: ${palette.error[key]}, \n`;
  });

  scss += `  ),\n`;
  scss += `);\n`;
  return scss;
}

export function createMyPalettes() {
  const usedPaletteLevels = getUsedPaletteLevels();
  console.log('usedPaletteLevels :>> ', usedPaletteLevels);

  createPrimaryPalette(usedPaletteLevels);
  createTertiaryPalette(usedPaletteLevels);
}
