import { config, parseTemplate } from './config.mjs';
import { createDirectoryIfNotExists, writeFile } from './file-io.mjs';

const parentFolder = 'src/app/components';
const folder = `${parentFolder}/${config.kabab}-dialog`;
createDirectoryIfNotExists(folder);

const dialogTsTemplate = `import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PascalCase } from '@bjanderson/moneytool-shared';
import { isNullOrEmpty } from '@bjanderson/utils';
import { DialogMode } from 'src/app/enums';
import { PascalCaseService } from 'src/app/services';
import { PascalCaseDialogBodyComponent } from './kabab-case-dialog-body.component';

@Component({
  selector: 'ui-kabab-case-dialog',
  standalone: true,
  styleUrl: './kabab-case-dialog.component.scss',
  templateUrl: './kabab-case-dialog.component.html',
  imports: [NgIf, MatButtonModule, MatDialogModule, MatIconModule],
})
export class PascalCaseDialogComponent {
  @Input() model: PascalCase;
  @Input() mode: DialogMode;

  DialogMode = DialogMode;

  dialogRef: MatDialogRef<PascalCaseDialogBodyComponent>;

  constructor(private dialog: MatDialog, private camelCaseService: PascalCaseService) {
    this.mode = DialogMode.CREATE;
  }

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'standard-dialog';
    dialogConfig.width = '90%';
    dialogConfig.data = { parent: this };

    this.dialogRef = this.dialog.open(PascalCaseDialogBodyComponent, dialogConfig);
  }

  save(model: PascalCase): void {
    if (isNullOrEmpty(model?.id)) {
      this.camelCaseService.create(model).subscribe();
    } else {
      this.camelCaseService.update(model).subscribe();
    }
  }
}
`;

const dialogTsFileName = parseTemplate(`${folder}/kabab-case-dialog.component.ts`);
const dialogTsTxt = parseTemplate(dialogTsTemplate);
writeFile(dialogTsFileName, dialogTsTxt);

const dialogSpecTemplate = `import { PascalCaseDialogComponent } from './kabab-case-dialog.component';

const dialogRef: any = {
  close: () => undefined,
};

const dialog: any = {
  open: () => dialogRef,
};

const camelCaseService: any = {
  create: () => of({}),
  update: () => of({}),
};

let component: any;
function init(): void {
  component = new PascalCaseDialogComponent(dialog, camelCaseService);
}

describe('PascalCaseDialogComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });

  describe('open', () => {
    beforeEach(() => {
      init();
    })

    it('calls dialog.open', () => {
      const spy = spyOn(component.dialog, 'open').and.callThrough();
      component.open();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('save()', () => {
    beforeEach(() => {
      init();
    });

    it('is a function', () => {
      expect(typeof component.save).toEqual('function');
    });

    it('calls camelCaseService.create()', () => {
      const spy = spyOn(component.camelCaseService, 'create');
      const model = new PascalCase();
      component.save(model);
      expect(spy).toHaveBeenCalled();
    });

    it('calls camelCaseService.update()', () => {
      const spy = spyOn(component.camelCaseService, 'update');
      const model = new PascalCase({ id: 'test' });
      component.save(model);
      expect(spy).toHaveBeenCalled();
    });
  });
});
`;

const dialogSpecFileName = parseTemplate(`${folder}/kabab-case-dialog.component.spec.ts`);
const dialogSpecTxt = parseTemplate(dialogSpecTemplate);
writeFile(dialogSpecFileName, dialogSpecTxt);

const dialogHtmlTemplate = `<button
  *ngIf="mode === DialogMode.CREATE"
  mat-icon-button
  color="primary"
  aria-label="Create a new Title Case"
  title="Create a new Title Case"
  (click)="open()"
>
  <mat-icon class="icon" aria-hidden="true" fontSet="fas" fontIcon="fa-plus"></mat-icon>
</button>

<button
  *ngIf="mode === DialogMode.EDIT"
  mat-icon-button
  color="primary"
  aria-label="Edit the Title Case"
  (click)="open()"
>
  <mat-icon class="icon" aria-hidden="true" fontSet="fas" fontIcon="fa-edit"></mat-icon>
</button>

`;

const dialogHtmlFileName = parseTemplate(`${folder}/kabab-case-dialog.component.html`);
const dialogHtmlTxt = parseTemplate(dialogHtmlTemplate);
writeFile(dialogHtmlFileName, dialogHtmlTxt);

const dialogScssTemplate = ``;

const dialogScssFileName = parseTemplate(`${folder}/kabab-case-dialog.component.scss`);
const dialogScssTxt = parseTemplate(dialogScssTemplate);
writeFile(dialogScssFileName, dialogScssTxt);

const dialogBodyTsTemplate = `import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PascalCase } from '@bjanderson/moneytool-shared';
import { isNullOrEmpty } from '@bjanderson/utils';
import { PascalCaseDialogComponent } from './kabab-case-dialog.component';

@Component({
  selector: 'ui-kabab-case-dialog-body',
  standalone: true,
  styleUrl: './kabab-case-dialog-body.component.scss',
  templateUrl: './kabab-case-dialog-body.component.html',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class PascalCaseDialogBodyComponent {
  parent: PascalCaseDialogComponent;
  nameInput: FormControl<string>;

  constructor(
    private dialogRef: MatDialogRef<PascalCaseDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) data: { parent: PascalCaseDialogComponent },
  ) {
    this.parent = data.parent;
    this.nameInput = new FormControl<string>(this.parent.model?.name);
  }

  close(): void {
    this.dialogRef.close();
  }

  canSave(): boolean {
    return !isNullOrEmpty(this.nameInput.value);
  }

  save(): void {
    const model = new PascalCase({ id: this.parent.model?.id, name: this.nameInput.value });
    this.parent.save(model);
    this.close();
  }
}
`;

const dialogBodyTsFileName = parseTemplate(`${folder}/kabab-case-dialog-body.component.ts`);
const dialogBodyTsTxt = parseTemplate(dialogBodyTsTemplate);
writeFile(dialogBodyTsFileName, dialogBodyTsTxt);

const dialogBodySpecTemplate = `import { PascalCaseDialogBodyComponent } from './kabab-case-dialog-body.component';

const dialogRef: any = {
  close: () => undefined,
};

const data: any = {
  parent: {
    save: () => undefined,
  },
};

let component: any;
function init(): void {
  component = new PascalCaseDialogBodyComponent(dialogRef, data);
}

describe('PascalCaseDialogBodyComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });

  describe('close', () => {
    beforeEach(() => {
      init();
    });

    it('calls dialogRef.close', () => {
      const spy = spyOn(component.dialogRef, 'close').and.callThrough();
      component.close();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('save', () => {
    beforeEach(() => {
      init();
      component.close = () => undefined;
    });

    it('calls parent.save', () => {
      const spy = spyOn(component.parent, 'save').and.callThrough();
      component.save();
      expect(spy).toHaveBeenCalled();
    });

    it('calls close', () => {
      const spy = spyOn(component, 'close').and.callThrough();
      component.save();
      expect(spy).toHaveBeenCalled();
    });
  });
});
`;

const dialogBodySpecFileName = parseTemplate(`${folder}/kabab-case-dialog-body.component.spec.ts`);
const dialogBodySpecTxt = parseTemplate(dialogBodySpecTemplate);
writeFile(dialogBodySpecFileName, dialogBodySpecTxt);

const dialogBodyHtmlTemplate = `<h2 mat-dialog-title>Title Case</h2>

<div mat-dialog-content>
  <div class="row">
    <mat-form-field class="flex1">
      <mat-label>Name</mat-label>
      <input matInput [formControl]="nameInput" />
    </mat-form-field>
  </div>
</div>

<div mat-dialog-actions class="row align-right">
  <button mat-raised-button aria-label="Close" (click)="close()">Close</button>

  <button
    mat-raised-button
    color="primary"
    aria-label="Save"
    (click)="save()"
    [disabled]="!canSave()"
  >
    Save
  </button>
</div>
`;

const dialogBodyHtmlFileName = parseTemplate(`${folder}/kabab-case-dialog-body.component.html`);
const dialogBodyHtmlTxt = parseTemplate(dialogBodyHtmlTemplate);
writeFile(dialogBodyHtmlFileName, dialogBodyHtmlTxt);

const dialogBodyScssTemplate = ``;

const dialogBodyScssFileName = parseTemplate(`${folder}/kabab-case-dialog-body.component.scss`);
const dialogBodyScssTxt = parseTemplate(dialogBodyScssTemplate);
writeFile(dialogBodyScssFileName, dialogBodyScssTxt);

const indexTemplate = `export * from './kabab-case-dialog.component'`;
const indexFileName = parseTemplate(`${folder}/index.ts`);
const indexTxt = parseTemplate(indexTemplate);
writeFile(indexFileName, indexTxt);
