import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { UiTemplateBottomSheetPageBodyComponent } from './ui-template-bottom-sheet-page-body.component';

@Component({
  selector: 'ui-ui-template-bottom-sheet-page',
  styleUrl: './ui-template-bottom-sheet-page.component.scss',
  templateUrl: './ui-template-bottom-sheet-page.component.html',
  imports: [MatBottomSheetModule, MatButtonModule],
})
export class UiTemplateBottomSheetPageComponent {
  constructor(private matBottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.matBottomSheet.open(UiTemplateBottomSheetPageBodyComponent);
  }
}
