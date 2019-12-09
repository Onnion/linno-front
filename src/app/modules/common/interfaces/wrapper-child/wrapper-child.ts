import { HostBinding } from '@angular/core';

export class WrapperChild {
  @HostBinding('class') classes: string;
  @HostBinding('style.width') width = '100%';

  constructor(classesString: string = '') {
    this.setClasses(classesString);
  }

  protected setClasses(classesString: string): void{
    this.classes = classesString;
  }
}