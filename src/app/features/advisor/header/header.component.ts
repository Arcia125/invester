import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BreakpointService } from '../../../services/breakpoint.service';
import { AuthService } from '../../../services/auth.service';
import { HeaderLink } from '../../../interfaces/header-link';

@Component({
  selector: 'advisor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDesktop$: Observable<boolean>;
  public navIsOpen = false;
  public links: HeaderLink[] = [
    {
      href: '/advisor',
      text: 'Dashboard'
    },
    {
      href: './contacts',
      text: 'Contacts'
    },
    {
      href: './opportunities',
      text: 'Opportunities'
    }
  ];
  constructor(private auth: AuthService, private router: Router, private breakpointService: BreakpointService) { }

  ngOnInit() {
    this.isDesktop$ = this.breakpointService.isDesktop$;
  }

  onClickLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
