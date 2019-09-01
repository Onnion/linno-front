import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fabricator } from '../../models/fabricator.model';

@Component({
  selector: 'app-fabricator',
  templateUrl: './fabricator.component.html',
  styleUrls: ['./fabricator.component.scss']
})
export class FabricatorComponent implements OnInit {
  @Input() fabricator: Fabricator;
  @Input() pure: boolean = false;
  @Input() index: number;
  @Output() select: EventEmitter<Fabricator> = new EventEmitter<Fabricator>();

  constructor() { }

  public selectFabricator(): void {
    this.select.emit(this.fabricator);
  }

  ngOnInit() {
  }

}
