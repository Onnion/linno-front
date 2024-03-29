import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { Store } from '../models/store.model';
import { Quotation } from '../models/quote.model';
import { Factory } from '../models/factory.model';

@Injectable()
export class StoreService {
  private _category: Category;
  private _categories: Category[];
  private _products: Product[];
  private _product: Product;
  private _factories: Factory[];
  private _cart: Quotation[];
  private _quotationGroups: Quotation[];
  private _quotationGroupsSelected: Quotation;
  public _store: BehaviorSubject<Store>;

  constructor() {
    this.initState();
  }

  get factories(): Factory[] {
    return this._factories
  }

  set factories(factories: Factory[]) {
    this._factories = factories;
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

  get cart(): Quotation[] {
    return this._cart;
  }

  get orders(): Quotation[] {
    return this._quotationGroups;
  }

  get orderSelected(): Quotation {
    return this._quotationGroupsSelected;
  }

  set orderSelected(order: Quotation) {
    this._quotationGroupsSelected = order;
  }

  set orders(orders: Quotation[]) {
    this._quotationGroups = orders;
    this.next();
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
      factories: this._factories,
      cart: this._cart,
      quotationGroups: this._quotationGroups
    });
  }

  private initState(): void {
    this._cart = [];
    this._quotationGroups = [];
    this._products = [];
    this._categories = [];
    this._factories = [];
    this._store = new BehaviorSubject<Store>(
      {
        categories: [],
        products: [],
        factories: [],
        cart: [],
        quotationGroups: []
      }
    );
  }

  public removeFromCart(quotation: Quotation): void {
    this._cart = this._cart.filter((quote) => quote.product_category.id !== quotation.product_category.id);
    this.next();
  }

  public cleanCart(): void {
    this._cart = []
  }

  public toggleInCart(factories: Factory[], amount: number = 1): void {
    this._cart = this._cart.concat({
      product_category: this._product,
      factories,
      amount
    })

    this.next();
  }
}
