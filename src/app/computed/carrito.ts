import { Component, computed, Input, signal } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  @Input() set initialProduct(val: Product) {
    this.product.set(val)
  }

  product = signal<Product>({
    name: "",
    exist: false,
    price: 0,
    cant: 0
  }) 


  listaDeProductos = signal<Product[]>([]);

  agregarAlCarrito() {
    this.listaDeProductos.update(lista => [...lista, this.product()]);

    this.product.update(p => ({
      ...p,
      cant: this.product().cant + 1
    }));
  }

  totalPrice = computed(() => {
    return this.listaDeProductos().reduce((acc, p) => acc + p.price, 0);
  });

  cantProductos = computed(() => {
    return this.listaDeProductos().length
  })


}
