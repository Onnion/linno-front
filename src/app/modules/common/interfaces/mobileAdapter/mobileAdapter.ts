import { HostListener } from '@angular/core';

export class MobileAdapter {
  public isMobile = false;
  private breaker: number;

  constructor(breaker = 991) {
    this.breaker = breaker;
  }

  public setIsMobile($event?): void {
    const width = $event ? $event.target.innerWidth : window.innerWidth;
    this.isMobile = width <= this.breaker;
  }

  @HostListener('window:resize', ['$event'])
  onresize($event) {
    this.setIsMobile($event);
  }

}
