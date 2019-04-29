import {Component, OnInit} from '@angular/core';

declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/reservation/list', title: 'Mes Réservations', icon: 'ti-align-left', class: ''},
  {path: '/reservation/add', title: 'Réserver une salle', icon: 'ti-plus', class: ''}

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
