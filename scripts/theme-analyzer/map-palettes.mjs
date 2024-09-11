import { readFile } from '../file-io.mjs';
import { getMaterialColors } from './read-material-colors.mjs';

// export function mapPalettes() {
//   mapMyPrimaryPalette();
//   mapMyTertiaryPalette();
//   mapPrimaryPalette();
//   mapPrimaryMagentaPalette();
//   mapTertiaryPalette();
//   mapTertiaryMagentaPalette();
// }

const groups = ['primary', 'secondary', 'neutral', 'neutralVariant', 'error'];

function mapMyPrimaryPalette() {
  const fileName = 'src/styles/material-theme/palettes/_my-primary-palette.scss';
  return mapPalette(fileName, 'myPrimary');
}

function mapMyTertiaryPalette() {
  const fileName = 'src/styles/material-theme/palettes/_my-tertiary-palette.scss';
  return mapPalette(fileName, 'myTertiary');
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
    // mapMyPrimaryPalette(),
    // mapMyTertiaryPalette(),
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

export function getUsedPaletteLevels() {
  const cssMap = getCssMap();

  const tmp = {};
  Object.keys(cssMap).forEach((key) => {
    if (tmp[cssMap[key]] == null) {
      tmp[cssMap[key]] = [key];
    } else {
      tmp[cssMap[key]].push(key);
    }
  });

  const paletteMap = {};
  const keys = Object.keys(tmp);
  keys.sort();
  keys.forEach((k) => {
    paletteMap[k] = tmp[k];
  });

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

    usedPaletteLevels[palette][group].push(parseInt(level, 10));
    usedPaletteLevels[palette][group].sort((a, b) => a - b);
  });

  console.log('usedPaletteLevels :>> ', usedPaletteLevels);
}
