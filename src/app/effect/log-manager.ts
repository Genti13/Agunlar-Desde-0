import { Component, computed, effect, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-log-manager',
  imports: [],
  templateUrl: './log-manager.html',
  styleUrl: './log-manager.css'
})
export class LogManager {
  constructor() {

  }

  public effectAgregarProducto = effect(() => {
    const elemento = this.listaDeProductos().at(-1);

    if (elemento) {
      console.log(`Se agrego un elemento: ${elemento.name} por un valor de ${elemento.price}, 
          ya hay ${this.listaDeProductos().length} elementos en el carrito`);
    }

  })

  ngOnInit() {
    console.log('🟢 Componente inicializado');

  }

  ngOnDestroy() {
    console.log('🔴 Componente destruido');
    this.effectAgregarProducto.destroy();
  }



  @Input() set initialProduct(val: Product) {
    this.product.set(val)
  }

  product = signal<Product>({
    name: "",
    exist: false,
    price: 0,
    cant: 0
  })
  eventLog = signal<string[]>([]);
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
