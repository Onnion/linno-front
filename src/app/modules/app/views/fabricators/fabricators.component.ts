import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { FabricatorService } from '../../services/fabricator/fabricator.service';

@Component({
  selector: 'app-fabricators',
  templateUrl: './fabricators.component.html',
  styleUrls: ['./fabricators.component.scss']
})
export class FabricatorsComponent implements OnInit {
  public product: Product;

  constructor(private store: StoreService, private fabricatorService: FabricatorService, private router: Router) { }

  ngOnInit() {
    this.product = this.store.product;
    if (!(this.product)) {
      this.router.navigate(['/']);
    }

    this.fabricatorService.get();
  }

}
