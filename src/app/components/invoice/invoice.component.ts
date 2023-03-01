import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  items = [
    { name: 'Item 1', quantity: 1, price: 200 },
    { name: 'Item 2', quantity: 2, price: 200 },
    { name: 'Item 3', quantity: 3, price: 300 },
    { name: 'Item 4', quantity: 4, price: 300 },
    { name: 'Item 5', quantity: 5, price: 400 },
    { name: 'Item 6', quantity: 6, price: 400 }
  ];
  subtotal = 0;
  adjustments = 100;
  total = 0;

  constructor() {
    this.subtotal = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    this.total = this.subtotal - this.adjustments;
  }
}
