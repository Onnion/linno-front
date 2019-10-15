import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { StoreService } from '../../store/store.service';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      price: '100',
      original_price: '150',
      id: 2291,
      name: 'Agulha Hipodérmica Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'agulha',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 22992,
      name: 'Luva Cirúrgica Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2293,
      name: 'Luva de Látex com Pó para Procedimento – Uso médico Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2284,
      name: 'Luva de Látex  para Procedimento  Powder Free – Uso Médico Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2275,
      name: 'Luva Nitrílica Azul Powder Free Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2266,
      name: 'Luva Nitrílica Preta Powder Free Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2257,
      name: 'Luva de Vinil Com Pó – Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2248,
      name: 'Luva de Vinil Sem Pó – Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2239,
      name: 'Luva Plástica Estéril Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 22215,
      name: 'Máscara Cirúrgica Tripla Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'máscara',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 12252,
      name: 'Máscara Descarpack PFF2 / N95',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'máscara',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 1,
      name: 'Agulha Hipodérmica Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'agulha',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 2,
      name: 'Luva Cirúrgica Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 3,
      name: 'Luva de Látex com Pó para Procedimento – Uso médico Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 4,
      name: 'Luva de Látex  para Procedimento  Powder Free – Uso Médico Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 5,
      name: 'Luva Nitrílica Azul Powder Free Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 6,
      name: 'Luva Nitrílica Preta Powder Free Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 7,
      name: 'Luva de Vinil Com Pó – Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 8,
      name: 'Luva de Vinil Sem Pó – Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 9,
      name: 'Luva Plástica Estéril Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 15,
      name: 'Máscara Cirúrgica Tripla Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'máscara',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 52,
      name: 'Máscara Descarpack PFF2 / N95',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'máscara',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 91,
      name: 'Agulha Hipodérmica Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'agulha',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 992,
      name: 'Luva Cirúrgica Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 93,
      name: 'Luva de Látex com Pó para Procedimento – Uso médico Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 84,
      name: 'Luva de Látex  para Procedimento  Powder Free – Uso Médico Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 75,
      name: 'Luva Nitrílica Azul Powder Free Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 66,
      name: 'Luva Nitrílica Preta Powder Free Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 57,
      name: 'Luva de Vinil Com Pó – Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 48,
      name: 'Luva de Vinil Sem Pó – Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 39,
      name: 'Luva Plástica Estéril Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'luva',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 215,
      name: 'Máscara Cirúrgica Tripla Descartável',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'máscara',
        created_at: '',
        updated_at: ''
      }
    },
    {
      price: '100',
      original_price: '150',
      id: 152,
      name: 'Máscara Descarpack PFF2 / N95',
      created_at: '',
      updated_at: '',
      category: {
        id: 0,
        name: 'máscara',
        created_at: '',
        updated_at: ''
      }
    }
  ];

  constructor(private store: StoreService) { }

  public get(): void {
    const products = of(this.products).pipe(delay(2000));

    products.subscribe(
      (products: Product[]) => { this.store.products = products; },
      (error) => console.log(error)
    );

  }
}
