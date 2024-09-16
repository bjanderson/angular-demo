import { globSync } from 'glob';
import { createDirectoryIfNotExists, pathExists, readFile, writeFile } from '../file-io.mjs';

function copyFiles(fromPath, toPath) {
  const files = globSync(fromPath).filter((f) => f.includes('.'));
  files.sort();
  files.forEach((file) => {
    const text = readFile(file);
    let outFile = `${toPath}/${file}`;

    if (pathExists(outFile)) {
      const i = outFile.lastIndexOf('/');
      const f = `${outFile.slice(0, i)}/new-${outFile.slice(i + 1)}`;
      outFile = `${toPath}/${f}`;
    }

    const directory = outFile
      .split('/')
      .slice(0, outFile.split('/').length - 1)
      .join('/');

    createDirectoryIfNotExists(directory);
    writeFile(outFile, text);
  });
}

(function run() {
  const args = process.argv;
  const toPath = args[2];
  console.log('toPath :>> ', toPath);

  copyFiles('src/styles/material-extras/**/*', toPath);
  copyFiles('src/styles/material-theme/**/*', toPath);
  copyFiles('src/styles/material-overrides/**/*', toPath);
  copyFiles('src/app/material-configs/**/*', toPath);
  copyFiles('src/material.scss', toPath);

  // clear: rm -rf ../test/src/{app,styles}/* ../test/src/*.scss
})();
