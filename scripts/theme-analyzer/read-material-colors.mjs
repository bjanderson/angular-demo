import { readFile } from '../file-io.mjs';

export function getMaterialColors() {
  const fileName = 'tmp/material.css';

  const materialCss = readFile(fileName);

  const rgbaRe = /(rgba\()(\d+, \d+, \d+, \d+(\.\d+)?\))/g;
  const hexRe = /#[a-z0-9]{3,8}/g;

  const rgbaColors = Array.from(materialCss.matchAll(rgbaRe))
    .map((m) => (m ? m[0] : null))
    .map(rgbaToHex)
    .filter((v, i, a) => v != null && a.indexOf(v) === i)
    .sort();
  // .join('\n')
  // .split('\n')
  // .filter((v, i, a) => a.indexOf(v) === i)
  // .sort();
  console.log('rgbaColors :>> ', rgbaColors);
  const hexColors = Array.from(materialCss.matchAll(hexRe))
    .join('\n')
    .split('\n')
    .filter((v, i, a) => v != null && a.indexOf(v) === i)
    .sort();
  console.log('hexColors :>> ', hexColors);
  const colors = [...rgbaColors, ...hexColors].sort();
  console.log('colors :>> ', colors);
  return colors;
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
