import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { Fabricator } from '../models/fabricator.model';
import { Store } from '../models/store.model';
import { Quote } from '../models/quote.model';

@Injectable()
export class StoreService {
  private _category: Category;
  private _categories: Category[];
  private _products: Product[];
  private _product: Product;
  private _fabricators: Fabricator[];
  private _cart: Quote[];
  public _store: BehaviorSubject<Store>;

  constructor() {
    this.initState();
  }

  get fabricators(): Fabricator[] {
    return this._fabricators
  }

  set fabricators(fabricators: Fabricator[]) {
    this._fabricators = fabricators;
    this.next();
  }

  get categories(): Category[] {
    return this._categories
  }

  set categories(categories: Category[]) {
    this._categories = categories;
    this.next();
  }

  get products(): Product[] {
    return this._products;
  }

  set products(products: Product[]) {
    this._products = products;
    this.next();
  }

  get product(): Product {
    return this._product;
  }

  set product(product: Product) {
    this._product = product;
    this.next();
  }

  get cart(): Quote[] {
    return this._cart;
  }

  get category(): Category {
    return this._category;
  }

  set category(category: Category) {
    this._category = category;
    this.next();
  }

  private next(): void {
    
    this._store.next({
      categories: this._categories,
      products: this._products,
      fabricators: this._fabricators,
      cart: this._cart
    });
  }

  private initState(): void {
    this._cart = [];
    this._products = [];
    this._categories = [];
    this._fabricators = [];
    this._store = new BehaviorSubject<Store>(
      {
        categories: [],
        products: [],
        fabricators: [],
        cart: []
      }
    );
  }

  public toggleInCart(fabricators: Fabricator[]): void {
    this._cart = this._cart.concat({
      product: this._product,
      fabricators
    })

    
    this.next();
  }
}
