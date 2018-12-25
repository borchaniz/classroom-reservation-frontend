import {Component, OnInit} from '@angular/core';

declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/authors', title: 'Authors', icon: 'ti-user', class: ''},
  {path: '/genres', title: 'Genres', icon: 'ti-layout-grid2-alt', class: ''},
  {path: '/books', title: 'Books', icon: 'ti-bookmark-alt', class: ''},

];

@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
