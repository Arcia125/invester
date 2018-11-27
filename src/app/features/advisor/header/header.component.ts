import { Component, OnInit } from '@angular/core';

import { HeaderLink } from '../../../interfaces/header-link';

@Component({
  selector: 'advisor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
