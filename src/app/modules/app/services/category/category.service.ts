import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { StoreService } from '../../store/store.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'luva',
      created_at: '',
      updated_at: ''
    },
    {
      id: 2,
      name: 'seringa',
      created_at: '',
      updated_at: ''
    },
    {
      id: 3,
      name: 'touca',
      created_at: '',
      updated_at: ''
    },
    {
      id: 4,
      name: 'bata',
      created_at: '',
      updated_at: ''
    },
    {
      id: 5,
      name: 'agulhas',
      created_at: '',
      updated_at: ''
    }
  ]

  constructor(private store: StoreService) { }

  public get(): void {
    const categories = of(this.categories).pipe(delay(2000));

    categories.subscribe(
      (categories: Category[]) => { this.store.categories = categories},
      (error) => console.log(error)
    );
    
  }
}
