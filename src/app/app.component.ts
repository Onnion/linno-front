import {Component, OnInit} from '@angular/core';
import {AclService} from 'ng2-acl';
import {ROLES} from './app.roles';

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {


    constructor(private aclService: AclService) { }


    ngOnInit() {
        this.aclService.setAbilities(ROLES);
    }
}
