import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeadsFilterTimesType } from 'src/app/modules/shared/models/leads-filter-times.model';
import { LeadsFilterType } from 'src/app/modules/shared/models/leads-filter.model';
import { Filter } from 'src/app/models';
import * as Moment from 'moment';
import { extendMoment, MomentRange } from 'moment-range';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private typesMenu: LeadsFilterType[];
  private timesMenu: LeadsFilterTimesType[];
  private type: LeadsFilterType;
  private times: LeadsFilterTimesType;
  private moment: MomentRange;
  public filter: BehaviorSubject<Filter>;

  constructor() {
    this.moment = extendMoment(Moment);
    this.initState();
    this.filter = new BehaviorSubject<Filter>({
      times: this.times,
      type: this.typesMenu
    });
  }

  private initState(): void {
    this.timesMenu = [
      { id: 'today', shouldClose: true, label: 'Hoje', min: this.moment(), max: this.moment() },
      { id: 'yesterday', shouldClose: true, label: 'Ontem', min: this.moment().subtract(1, 'd'), max: this.moment() },
      { id: 'currentMounth', shouldClose: true, label: 'Este Mês', min: this.moment().startOf('month'), max: this.moment() },
      { id: 'custom', shouldClose: false, label: 'Personalizado' },
    ];
    this.typesMenu = [
      {canRemove: false, active: true, name: 'google', label: 'Google', icon: 'google', activeColor: '#dd4b39' },
      {canRemove: false, active: false, name: 'facebook', label: 'Facebook', icon: 'facebook', activeColor: '#3b5998' },
      {canRemove: false, active: false, name: 'call', label: 'Ligações', icon: 'phone', activeColor: '#89ba16' }
    ];
    this.times = this.timesMenu[0];
    this.type = this.typesMenu[0];
  }

  private next(): void {
    this.filter.next({times: this.times, type: this.typesMenu});
  }

  private getNumberOfActives(typesMenu: LeadsFilterType[]): LeadsFilterType[] {
    return typesMenu.filter((type: LeadsFilterType) => {
      return type.active;
    });
  }

  public setFilterTime(range: Moment.Moment[], times: LeadsFilterTimesType): void {
    this.times = times;
    this.next();
  }

  public setFilterType(type: LeadsFilterType): void {
    this.type = type;

    let typesMenu = this.typesMenu.map(($type: LeadsFilterType) => {
      let active = $type.active;
      if ($type.name === type.name) {
        active = !active;
        if ((
          (this.getNumberOfActives(this.typesMenu).length === 1) && 
          (this.getNumberOfActives(this.typesMenu)[0].name === type.name)
        )) {
          active = !active;
        }
      }
      return { ...$type, active };
    });
    
    typesMenu = typesMenu.map(($type: LeadsFilterType) => {
      return {
        ...$type,
        canRemove: $type.active && (this.getNumberOfActives(typesMenu).length > 1)
      };
    });

    this.typesMenu = typesMenu;
    this.next();
  }

  public getTimesMenu(): LeadsFilterTimesType[] {
    return this.timesMenu;
  }

  public getTypeMenu(): LeadsFilterType[] {
    return this.typesMenu;
  }

  public getTypeMenuWithoutCall(): LeadsFilterType[] {
    return this.typesMenu.filter((type: LeadsFilterType) => type.name !== 'call');
  }
}