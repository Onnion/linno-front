import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FabricatorService {
  private products: any[] = [
    {
      id: 1,
      name: 'descarpack',
      created_at: '',
      updated_at: '',
    },
    {
      id: 4,
      name: 'descarpack 2',
      created_at: '',
      updated_at: '',
    },
    {
      id: 3,
      name: 'descarpack 3',
      created_at: '',
      updated_at: '',
    },
    {
      id: 2,
      name: 'bifarma',
      created_at: '',
      updated_at: '',
    }
  ]

  constructor(private store: StoreService) { }

  public get(): void {
    const fabricators = of(this.products).pipe(delay(2000));

    fabricators.subscribe(
      (fabricators: any[]) => { this.store.fabricators = fabricators},
      (error) => console.log(error)
    );

  }
}
