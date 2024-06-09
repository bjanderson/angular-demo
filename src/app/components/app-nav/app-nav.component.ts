import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ui-app-nav',
  standalone: true,
  styleUrl: './app-nav.component.scss',
  templateUrl: './app-nav.component.html',
  imports: [RouterModule, MatExpansionModule],
})
export class AppNavComponent {}
