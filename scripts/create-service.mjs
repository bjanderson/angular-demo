import { config, parseTemplate } from './config.mjs';
import { createDirectoryIfNotExists, readFile, writeFile } from './file-io.mjs';

const parentFolder = 'src/app/services';
const folder = `${parentFolder}/${config.kabab}`;
createDirectoryIfNotExists(folder);

const tsTemplate = `import { Injectable } from '@angular/core';
import { AlertService } from '../alert';
import { ApiService } from '../api';
import { CrudService } from '../crud';
import { LoadingService } from '../loading';

@Injectable({
  providedIn: 'root',
})
export class PascalCaseService extends CrudService<PascalCase> {
  constructor(
    protected override alertService: AlertService,
    protected override apiService: ApiService,
    protected override loadingService: LoadingService
  ) {
    super(alertService, apiService, loadingService, 'api/kabab-case', PascalCase);
    this.getAll();
  }
}
`;

const tsFileName = parseTemplate(`${folder}/kabab-case.service.ts`);
const tsTxt = parseTemplate(tsTemplate);
writeFile(tsFileName, tsTxt);

const specTemplate = `import { PascalCaseService } from './kabab-case.service';
import { alertService } from '../alert/alert.service.mock';
import { apiService } from '../api/api.service.mock';
import { loadingService } from '../loading/loading.service.mock';

let service: any;
function init(): void {
  service = new PascalCaseService(alertService, apiService, loadingService);
}

describe('PascalCaseService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(service).toBeDefined();
    });
  });
});
`;

const specFileName = parseTemplate(`${folder}/kabab-case.service.spec.ts`);
const specTxt = parseTemplate(specTemplate);
writeFile(specFileName, specTxt);

const mockTemplate = `export const camelCaseService: any = {};
`;
const mockFileName = parseTemplate(`${folder}/kabab-case.service.mock.ts`);
const mockTxt = parseTemplate(mockTemplate);
writeFile(mockFileName, mockTxt);

const indexTemplate = `export * from './kabab-case.service'`;
const indexFileName = parseTemplate(`${folder}/index.ts`);
const indexTxt = parseTemplate(indexTemplate);
writeFile(indexFileName, indexTxt);

const indexFile = `${parentFolder}/index.ts`;
const index = readFile(indexFile);
let exports = index.split('\n');
exports.push(`export * from './${config.kabab}';`);
exports = exports.filter((v, i, a) => a.indexOf(v) === i);
exports.sort();
writeFile(indexFile, exports.join('\n'), true);
