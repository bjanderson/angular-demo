import { execSync } from 'child_process';
import { readFile, writeFile } from '../file-io.mjs';

function setBaseColorPalettes() {
  const fileName = 'src/styles/material-theme/_ui-theme.scss';
  let uiTheme = readFile(fileName);
  console.log('uiTheme :>> ', uiTheme);
  uiTheme = uiTheme
    .replace('// $primary: $primary', '$primary: $primary')
    .replace('// $tertiary: $tertiary', '$tertiary: $tertiary')
    .replace('$primary: $app-primary', '// $primary: $app-primary')
    .replace('$tertiary: $app-tertiary', '// $tertiary: $app-tertiary');
  writeFile(fileName, uiTheme, true);
}

function setMyColorPalettes() {
  const fileName = 'src/styles/material-theme/_ui-theme.scss';
  let uiTheme = readFile(fileName);
  console.log('uiTheme :>> ', uiTheme);
  uiTheme = uiTheme
    .replace('$primary: $primary', '// $primary: $primary')
    .replace('$tertiary: $tertiary', '// $tertiary: $tertiary')
    .replace('// $primary: $app-primary', '$primary: $app-primary')
    .replace('// $tertiary: $app-tertiary', '$tertiary: $app-tertiary');
  writeFile(fileName, uiTheme, true);
}

export function generateMaterialCss() {
  setBaseColorPalettes();
  execSync('npm run sass:material');
  setMyColorPalettes();
}
