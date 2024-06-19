import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UiTemplateDialogBodyComponent } from './ui-template-dialog-body.component';

@Component({
  selector: 'ui-template-dialog',
  standalone: true,
  styleUrl: './ui-template-dialog.component.scss',
  templateUrl: './ui-template-dialog.component.html',
  imports: [NgIf, MatButtonModule, MatDialogModule, MatIconModule],
})
export class UiTemplateDialogComponent {
  dialogRef: MatDialogRef<UiTemplateDialogBodyComponent>;

  constructor(private dialog: MatDialog) {}

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'standard-dialog';
    dialogConfig.width = '60%';
    dialogConfig.data = { parent: this };

    this.dialogRef = this.dialog.open(UiTemplateDialogBodyComponent, dialogConfig);
  }
}
