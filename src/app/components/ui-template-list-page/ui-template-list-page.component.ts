import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'ui-ui-template-list-page',
  standalone: true,
  styleUrl: './ui-template-list-page.component.scss',
  templateUrl: './ui-template-list-page.component.html',
  imports: [DatePipe, MatDividerModule, MatIconModule, MatListModule],
})
export class UiTemplateListPageComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
