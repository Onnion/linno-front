import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Fabricator } from '../../models/fabricator.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class FabricatorService {
  constructor(private store: StoreService, private http: HttpClient) { }

  public get(): void {
    this.http.get(`${environment.AUTH_URL}/api/companies`).subscribe(
      (companies_data: any) => {
        const companies = companies_data.data;
        this.store.fabricators = companies
      }
    );
  }
}
