import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar.component.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
