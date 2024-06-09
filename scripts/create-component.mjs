import { config, parseTemplate } from './config.mjs';
import { createDirectoryIfNotExists, writeFile } from './file-io.mjs';

const parentFolder = 'src/app/components';
const folder = `${parentFolder}/${config.kabab}`;
createDirectoryIfNotExists(folder);

const tsTemplate = `import { Component } from '@angular/core';

@Component({
  selector: 'ui-kabab-case',
  standalone: true,
  styleUrl: './kabab-case.component.scss',
  templateUrl: './kabab-case.component.html',
  imports: [],
})
export class PascalCaseComponent {}
`;

const tsFileName = parseTemplate(`${folder}/kabab-case.component.ts`);
const tsTxt = parseTemplate(tsTemplate);
writeFile(tsFileName, tsTxt);

const specTemplate = `import { PascalCaseComponent } from './kabab-case.component';

let component: any;
function init(): void {
  component = new PascalCaseComponent();
}

describe('PascalCaseComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
`;

const specFileName = parseTemplate(`${folder}/kabab-case.component.spec.ts`);
const specTxt = parseTemplate(specTemplate);
writeFile(specFileName, specTxt);

const htmlTemplate = `<div class="kabab-case">Title Case</div>
`;

const htmlFileName = parseTemplate(`${folder}/kabab-case.component.html`);
const htmlTxt = parseTemplate(htmlTemplate);
writeFile(htmlFileName, htmlTxt);

const scssTemplate = ``;

const scssFileName = parseTemplate(`${folder}/kabab-case.component.scss`);
const scssTxt = parseTemplate(scssTemplate);
writeFile(scssFileName, scssTxt);

const indexTemplate = `export * from './kabab-case.component'`;
const indexFileName = parseTemplate(`${folder}/index.ts`);
const indexTxt = parseTemplate(indexTemplate);
writeFile(indexFileName, indexTxt);
