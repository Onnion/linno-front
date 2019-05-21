import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { RouteInfo, ROUTES } from './sidebar.config';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';
import { AclService } from 'ng2-acl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    public menuItems: RouteInfo[];
    public user: User;

    constructor(private http: HttpClient, private authService: AuthService, private aclService: AclService) {
    }

    public hasPermission(permission: any): boolean {
        return this.aclService.can(permission);
    }

    public isMobileMenu(): boolean {
        return window.outerWidth <= 991;
    }

    public ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.user = this.authService.getDataUser();
    }

    public updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }

    public isMac(): boolean {
        return (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0);
    }

    public logout(): void {
        this.authService.logout();
    }

    // public getReceipt(url: string) {
    //     console.log(url);
    //     return this.http
    //         .get(url, {responseType: 'blob'})
    //         .subscribe((res: any) => {
    //             console.log('start download:', res);
    //             var url = window.URL.createObjectURL(res.data);
    //             var a = document.createElement('a');
    //             document.body.appendChild(a);
    //             a.setAttribute('style', 'display: none');
    //             a.href = url;
    //             a.download = res.filename;
    //             a.click();
    //             window.URL.revokeObjectURL(url);
    //             a.remove(); // remove the element
    //         }, error => {
    //             console.log('download error:', JSON.stringify(error));
    //         }, () => {
    //             console.log('Completed file download.')
    //         });
    // }
}
