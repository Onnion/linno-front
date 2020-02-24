import { Directive, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { masks } from '../../consts/consts.helpers';
import { maskFormat } from '../../../../utils/mask.utils';

@Directive({
    selector: '[mask]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MaskDirective,
        multi: true
    }]
})
export class MaskDirective implements ControlValueAccessor {
    @Input('mask') type: string;
    @Input('target') target: HTMLInputElement;


    private onTouched: any;
    private onChange = (value: any) => { if (this.target) { this.target.value = value } };

    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    writeValue(value: string): void { this.onChange(value) }

    private transform = ($event, value: string) => {
        $event.target.value = value;
        this.writeValue(value);
    }

    private backSpaceHandle($event, _mask: string) {
        if (this.type.toUpperCase() === 'PHONE') {
            const length = $event.target.value.length;
            if (length > 14) { _mask = masks['PHONE_D']; }
        }
        const newValue = maskFormat($event.target.value, _mask);
        this.transform($event, newValue);
    }

    private handleKeyUp($event) {
        let newValue = $event.target.value;

        if (this.type.toUpperCase() === 'PHONE') {
            const length = $event.target.value.length;
            if (length > 14) { newValue = maskFormat($event.target.value, masks['PHONE']); }
        }

        this.transform($event, newValue);
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        const check_press_backspace = $event.keyCode !== 8;
        let _mask = masks[this.type.toUpperCase()];
        check_press_backspace ? this.backSpaceHandle($event, _mask) : this.handleKeyUp($event);
    }

    @HostListener('blur', ['$event'])
    onBlur($event: any) {
        if ($event.target.value.length > masks[this.type.toUpperCase()].length) {
            const newValue = $event.target.value.slice(0, masks[this.type.toUpperCase()].length);
            this.transform($event, newValue);
        }
    }

}