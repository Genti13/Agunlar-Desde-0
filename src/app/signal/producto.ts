import { Component, Input, signal, Signal } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})

export class Producto {

  @Input() set initialProduct(val: Product) {
    this.product.set(val)
  }

  product = signal<Product>({
    name: "",
    exist: false,
    price: 0,
    cant: 0
  })

  updateProductPrice() {
    this.product.update(p => {
      return {
        ...p,
        price: p.price + 100
      }

    })
  }

  toggleExist() {
    this.product.update(p => {
      return {
        ...p,
        exist: false
      }

    })
  }

  changeProduct() {
    this.product.set({
      name: 'Fernet',
      exist: true,
      price: 5200,
      cant: 0
    })
  }

}
