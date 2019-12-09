import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    constructor(private router: Router, private deviceService: DeviceDetectorService) { }

    ngOnInit() {

        if (!this.deviceService.isMobile()) {
            this.router.navigate(['/admin']);
        }

    }
}
