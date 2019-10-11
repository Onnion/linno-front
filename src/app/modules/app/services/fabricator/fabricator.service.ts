import { Injectable } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Fabricator } from '../../models/fabricator.model';

@Injectable()
export class FabricatorService {
  private fabricators: Fabricator[] = [
    {
      id: 1,
      name: 'descarpack',
      picture: 'https://api.adorable.io/avatars/1',
      created_at: '',
      updated_at: '',
    },
    {
      id: 4,
      name: 'descarpack 2',
      picture: 'https://api.adorable.io/avatars/4',
      created_at: '',
      updated_at: '',
    },
    {
      id: 3,
      name: 'descarpack 3',
      picture: 'https://api.adorable.io/avatars/3',
      created_at: '',
      updated_at: '',
    },
    {
      id: 2,
      picture: 'https://api.adorable.io/avatars/2',
      name: 'bifarma',
      created_at: '',
      updated_at: '',
    }
  ]

  constructor(private store: StoreService) { }

  public get(): void {
    const fabricators = of(this.fabricators).pipe(delay(2000));

    fabricators.subscribe(
      (fabricators: any[]) => { this.store.fabricators = fabricators },
      (error) => console.log(error)
    );

  }
}
