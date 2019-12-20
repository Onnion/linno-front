import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  public id: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get("quotation_groups_id");
    this.id = id;
  }
}
