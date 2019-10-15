import {
    Directive,
    Input,
    Output,
    EventEmitter,
    HostBinding,
    HostListener
} from '@angular/core';

@Directive({ selector: '[press]' })
export class LongPress {
    @Output()
    longPress = new EventEmitter();

    private _timeout: any;

    @HostListener('mousedown') onMouseDown(e) {
        console.log('foi');
        this._timeout = setTimeout(() => {
            this.longPress.emit(e);
        }, 500);
    }

    @HostListener('mouseup') onMouseUp() {
        clearTimeout(this._timeout);
    }

    @HostListener('mouseleave') onMouseLeave() {
        clearTimeout(this._timeout);
    }
}