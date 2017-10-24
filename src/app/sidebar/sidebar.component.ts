import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'periodos', title: 'Periodos',  icon:'pe-7s-user', class: '' },
    { path: 'estados', title: 'Estados Financieros',  icon:'pe-7s-note2', class: '' },
    { path: 'liquidez', title: 'R de Liquidez',  icon:'pe-7s-news-paper', class: '' },
    { path: 'endeudamiento', title: 'R de Endeudamiento',  icon:'pe-7s-science', class: '' },
    { path: 'rentabilidad', title: 'R de Rentabilidad',  icon:'pe-7s-map-marker', class: '' },
    { path: 'cobertura', title: 'R de Cobertura',  icon:'pe-7s-bell', class: '' },
    //{ path: 'notas', title: 'Notas',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
