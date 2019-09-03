import { Component, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onresize(): void {
    this.checkMobile();
  }

  private checkMobile(): void {
    const isMobile = this.deviceService.isMobile();
    this.router.navigate([!isMobile ? '/admin' : '/app']);
  }

}
