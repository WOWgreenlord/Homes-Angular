import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuComponent } from "./mat-menu/mat-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, RouterModule, MatSlideToggleModule, MatMenuComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="./assets/logo.svg"
            alt="notFound"
            aria-hidden="true"
          />
        <app-mat-menu></app-mat-menu>
        </header>
      </a>
      <section class="conetnt">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Homes';
}
