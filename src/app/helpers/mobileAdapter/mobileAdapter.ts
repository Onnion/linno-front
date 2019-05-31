import { HostListener } from "@angular/core";

export class MobileAdapter {
    public isMobile = false;

    constructor() { }

    public setIsMobile($event?): void {
        const width = $event ? $event.target.innerWidth : window.innerWidth;
        this.isMobile = width <= 991;
    }

    @HostListener('window:resize', ['$event'])
    onresize($event) {
      this.setIsMobile($event);
    }
    
}
