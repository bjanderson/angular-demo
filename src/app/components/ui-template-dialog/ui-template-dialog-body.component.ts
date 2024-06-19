import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UiTemplateDialogComponent } from './ui-template-dialog.component';

@Component({
  selector: 'ui-ui-template-dialog-body',
  standalone: true,
  styleUrl: './ui-template-dialog-body.component.scss',
  templateUrl: './ui-template-dialog-body.component.html',
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
})
export class UiTemplateDialogBodyComponent {
  parent: UiTemplateDialogComponent;

  constructor(
    private dialogRef: MatDialogRef<UiTemplateDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) data: { parent: UiTemplateDialogComponent },
  ) {
    this.parent = data.parent;
  }

  close(): void {
    this.dialogRef.close();
  }
}
