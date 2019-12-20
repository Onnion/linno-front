import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Quotation } from '../../models/quote.model';
import { QuotationService } from 'src/app/modules/common/services/quotation/quotation.service';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit, OnChanges {
  @Input() id: string;

  public quotations: Quotation[];
  public loading = false;

  constructor(private quotationService: QuotationService) { }

  private initQuotations(): void {
    this.loading = true;
    this.quotationService.getQuotations(this.id).subscribe(
      (quotations: Quotation[]) => {
        this.loading = false;
        this.quotations = quotations;
      }
    );
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const id = changes.id;

    if (id.currentValue) {
      this.initQuotations();
    }
  }
}
