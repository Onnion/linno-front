import { Input, HostBinding, ElementRef } from '@angular/core';
import * as moment from 'moment';

export class LeadList<T> {
    // protected leadsService: LeadsService;
    // protected element: ElementRef;
    // protected disableDetail: boolean;
    // private prevBackground: any;
    // public detail = false;

    // @Input() lead: T;
    // @Input() mobile: boolean;
    // @HostBinding('style.background') background: string;
    // @HostBinding('style.overflow') overflow = 'visible';

    // public ratingSet($event: Rate, lead_id: number) {
    //     const lead = <any>this.lead as Lead;
    //     this.leadsService.rate($event, lead_id, lead.source === 'call' ? 'calls' : 'leads');
    // }

    // public timeAgo(): string {
    //     const lead = this.lead as any;
    //     const TODAY = moment().startOf('day');
    //     const YESTERDAY = moment().subtract(1, 'day');
    //     const date = moment(lead.created_at);
    //     const check = ((date.isSame(TODAY, 'd')) || (date.isSame(YESTERDAY, 'd')));
    //     return `${check ? `${date.calendar()}` : `${date.format('DD/MM/YYYY HH:mm')}`}`;
    // }

    // public icon(): string {
    //     const lead = <any>this.lead as Lead;
    //     let icon = '';

    //     if (lead.campaign.origin.toUpperCase() === 'ORGANIC') {
    //         icon = `fa fa-laptop ${lead.campaign.origin.toLowerCase()}`;
    //     } else {
    //         icon = `fa fa-${lead.campaign.origin.toLowerCase()} ${lead.campaign.origin.toLowerCase()}`;
    //     }

    //     return icon;
    // }

    // public toggleDetail(): void {
    //     if (!this.disableDetail) {
    //         const odd = this.element.nativeElement.classList.contains('odd');
    //         this.prevBackground = odd ? 'rgba(91, 91, 91, 0.1)' : 'rgba(91, 91, 91, 0.05)';
    //         this.detail = !this.detail;
    //         this.background = this.detail ? '#cdcdcd' : this.prevBackground;
    //     }
    // }

}
