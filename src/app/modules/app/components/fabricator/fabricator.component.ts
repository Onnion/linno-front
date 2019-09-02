import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Fabricator } from '../../models/fabricator.model';

@Component({
  selector: 'app-fabricator',
  templateUrl: './fabricator.component.html',
  styleUrls: ['./fabricator.component.scss']
})
export class FabricatorComponent implements OnInit, OnChanges {
  @Input() fabricator: Fabricator;
  @Input() pure: boolean = false;
  @Input() index: number;
  @Input() all: boolean;
  @Output() select: EventEmitter<Fabricator> = new EventEmitter<Fabricator>();

  public checked = false;

  constructor() { }

  public selectFabricator(): void {
    this.select.emit(this.fabricator);
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const all = changes.all;
    console.log(changes, (all && (all.previousValue !== all.currentValue) && !all.firstChange));
    if (all && (all.previousValue !== all.currentValue) && !all.firstChange) {
      this.checked = all.currentValue;
    }
  }
}
