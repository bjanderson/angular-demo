import { config, parseTemplate } from './config.mjs';
import {} from './create-dialog.mjs';
import {} from './create-service.mjs';
import { createDirectoryIfNotExists, writeFile } from './file-io.mjs';

const parentFolder = 'src/app/components';
const folder = `${parentFolder}/${config.kabab}-table`;
createDirectoryIfNotExists(folder);

const tsTemplate = `import { Component, Signal, ViewChild, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PascalCase } from '@bjanderson/moneytool-shared';
import { DialogMode } from 'src/app/enums';
import { PascalCaseService } from 'src/app/services';
import { PascalCaseDialogComponent } from '../kabab-case-dialog';

@Component({
  selector: 'ui-kabab-case-table',
  standalone: true,
  styleUrl: './kabab-case-table.component.scss',
  templateUrl: './kabab-case-table.component.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    PascalCaseDialogComponent,
  ],
})
export class PascalCaseTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  DialogMode = DialogMode;

  dataSource: Signal<MatTableDataSource<PascalCase>>;
  displayedColumns: string[];

  constructor(private camelCaseService: PascalCaseService) {
    this.displayedColumns = ['name', 'id', 'buttons'];

    this.dataSource = computed(() => {
      const dataSource = new MatTableDataSource<PascalCase>(
        this.camelCaseService.models(),
      );
      dataSource.paginator = this.paginator;
      dataSource.sort = this.sort;
      return dataSource;
    });
  }

  delete(model: PascalCase): void {
    this.camelCaseService.delete(model).subscribe();
  }
}
`;

const tsFileName = parseTemplate(`${folder}/kabab-case-table.component.ts`);
const tsTxt = parseTemplate(tsTemplate);
writeFile(tsFileName, tsTxt);

const specTemplate = `import { signal } from '@angular/core';
import { PascalCase } from '@bjanderson/moneytool-shared';
import { of } from 'rxjs';
import { PascalCaseTableComponent } from './kabab-case-table.component';

const camelCaseService: any = {
  models: () => signal([new PascalCase()]),
  delete: () => of(null),
};

let component: any;
function init(): void {
  component = new PascalCaseTableComponent(camelCaseService);
}

describe('PascalCaseTableComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });

  describe('delete()', () => {
    beforeEach(() => {
      init();
    });

    it('is a function', () => {
      expect(typeof component.delete).toEqual('function');
    });

    it('calls camelCaseService.delete()', () => {
      const spy = spyOn(component.camelCaseService, 'delete');
      const model = new PascalCase();
      component.delete(model);
      expect(spy).toHaveBeenCalled();
    });
  });
});
`;

const specFileName = parseTemplate(`${folder}/kabab-case-table.component.spec.ts`);
const specTxt = parseTemplate(specTemplate);
writeFile(specFileName, specTxt);

const htmlTemplate = `<div class="kabab-case-table">
  <mat-table [dataSource]="dataSource()" matSort>
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{ row.name }} </mat-cell>
    </ng-container>

    <ng-container matColumnDef="id">
      <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{ row.id }} </mat-cell>
    </ng-container>

    <ng-container matColumnDef="buttons">
      <mat-header-cell *matHeaderCellDef>
        <div class="row flex1 align-right">
          <ui-kabab-case-dialog></ui-kabab-case-dialog>
        </div>
      </mat-header-cell>

      <mat-cell *matCellDef="let row">
        <div class="row flex1 align-right">
          <ui-kabab-case-dialog
            [mode]="DialogMode.EDIT"
            [model]="row"
          ></ui-kabab-case-dialog>

          <button mat-icon-button color="primary" title="Delete" (click)="delete(row)">
            <mat-icon class="icon" aria-hidden="true" fontSet="fas" fontIcon="fa-trash"></mat-icon>
          </button>
        </div>
      </mat-cell>
    </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
  </mat-table>

  <mat-paginator></mat-paginator>
</div>
`;

const htmlFileName = parseTemplate(`${folder}/kabab-case-table.component.html`);
const htmlTxt = parseTemplate(htmlTemplate);
writeFile(htmlFileName, htmlTxt);

const scssTemplate = ``;

const scssFileName = parseTemplate(`${folder}/kabab-case-table.component.scss`);
const scssTxt = parseTemplate(scssTemplate);
writeFile(scssFileName, scssTxt);

const indexTemplate = `export * from './kabab-case-table.component'`;
const indexFileName = parseTemplate(`${folder}/index.ts`);
const indexTxt = parseTemplate(indexTemplate);
writeFile(indexFileName, indexTxt);
