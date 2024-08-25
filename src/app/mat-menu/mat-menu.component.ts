import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mat-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './mat-menu.component.html',
  styleUrl: './mat-menu.component.css'
})
export class MatMenuComponent {

}
