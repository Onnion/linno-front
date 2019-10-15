import { Component, OnInit } from '@angular/core';
import { AclService } from 'ng2-acl';
import { ROLES } from './app.roles';
import { Router, NavigationStart } from '@angular/router';
// import { FilterService } from './services/filter/filter.service';

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    constructor(
        private aclService: AclService,
        private router: Router,
        // private filterService: FilterService
    ) { }

    ngOnInit() {

        // this.router.events.subscribe(
        //     (res) => {
        //         if ((res instanceof NavigationStart) && (res.url.toLowerCase() !== '/cadastro')) {
        //             this.filterService.clear();
        //         }
        //     },
        //     (error) => { }
        // );
    }
}
