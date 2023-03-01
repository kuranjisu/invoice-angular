import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Items } from 'src/app/interfaces/items';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  items: Items[] = [];
  subtotal = 0;
  adjustments = 100;
  total = 0;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
    this.subtotal = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    this.total = this.subtotal - this.adjustments;
  }
}
