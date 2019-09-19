import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Budgetype } from '../../models/budget.model';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.css']
})
export class BudgetDetailsComponent implements OnInit {
  public budget: Budgetype;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.budget.subscribe(
      (budget) => {
        this.budget = budget;
      }
    );
  }

}
