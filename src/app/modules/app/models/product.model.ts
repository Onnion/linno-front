import { BaseRequestData } from './base-request-data.model';
import { Category } from './category.model';

export interface Saler extends BaseRequestData {
    readonly name: string
}

export interface Product extends BaseRequestData {
    readonly name: string;
    readonly picture?: string;
    readonly price: number;
    readonly original_price: string;
    readonly category: Category;
    amount_in_cart?: number;

}