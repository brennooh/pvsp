import { Component, OnInit } from '@angular/core';
import { NavToggleService } from './services/nav-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pvspt';
  isNavActive!: boolean;

  constructor() {
  }

   ngOnInit() {
    NavToggleService.isNavActive().subscribe((bool) => this.isNavActive = bool);
   }
}
