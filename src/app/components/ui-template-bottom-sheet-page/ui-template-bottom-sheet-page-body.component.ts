import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'ui-ui-template-bottom-sheet-page-body',
  standalone: true,
  styleUrl: './ui-template-bottom-sheet-page-body.component.scss',
  templateUrl: './ui-template-bottom-sheet-page-body.component.html',
  imports: [],
})
export class UiTemplateBottomSheetPageBodyComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<UiTemplateBottomSheetPageBodyComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
