import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavToggleService } from 'src/app/services/nav-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor(private router: Router) {
  }

  toggleNav(): void {
    NavToggleService.toggleNav();
  }

  navigateToUserProfile(userslug: string): void {
    this.router.navigate(['u', userslug]);
  }

}
