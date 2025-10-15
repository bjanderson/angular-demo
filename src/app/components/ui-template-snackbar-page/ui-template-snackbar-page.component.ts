import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ui-ui-template-snackbar-page',
  styleUrl: './ui-template-snackbar-page.component.scss',
  templateUrl: './ui-template-snackbar-page.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class UiTemplateSnackbarPageComponent {
  constructor(private matSnackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }
}
