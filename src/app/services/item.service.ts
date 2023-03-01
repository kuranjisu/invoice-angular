import { Injectable } from '@angular/core';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Items[] = [
    { name: 'Item 1', quantity: 1, price: 200.00 },
    { name: 'Item 2', quantity: 2, price: 200.00 },
    { name: 'Item 3', quantity: 3, price: 300.00 },
    { name: 'Item 4', quantity: 4, price: 300.00 },
    { name: 'Item 5', quantity: 5, price: 400.00 },
    { name: 'Item 6', quantity: 6, price: 400.00 }
  ];

  constructor() {
    console.log('InvoiceItemsService instance created');
  }

  getItems(): Items[] {
    return this.items;
  }
}
