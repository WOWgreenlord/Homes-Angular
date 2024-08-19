import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="./assets/logo.svg"
          alt="notFound"
          aria-hidden="true"
        />
      </header>
      <section class="conetnt">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Homes';
}
