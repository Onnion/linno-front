import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar.component.config';
import { AclService } from 'ng2-acl';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/modules/common/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems = ROUTES;

  constructor(
    public auth: AuthService,
    private location: Location,
    private aclService: AclService) { }


  public hasPermission(permission: any): boolean {
    return this.aclService.can(permission);
  }


  public toggleNavbarMobile(): void {
    document.getElementById('sidenav-collapse-main').classList.toggle('show');
    document.querySelector('body').classList.toggle('overflow-hidden');

  }


  public closeNavbarMobile(): void {
    document.getElementById('sidenav-collapse-main').classList.remove('show');
    document.querySelector('body').classList.remove('overflow-hidden');

  }


  public match(root: string): boolean {
    const path = this.location.prepareExternalUrl(this.location.path());
    let match_url;

    if (root === 'painel' || root === 'fornecedor' || root === 'vendedor') {
      match_url = new RegExp(`((([a-z])+\/)+\#\/)?${root}$`);

    } else {
      match_url = new RegExp(`((([a-z])+\/)+\#\/)?${root}(((\/[a-z0-9])+\/)+)?`);

    }

    return match_url.test(path);
  }


  ngOnInit() {
  }

}
