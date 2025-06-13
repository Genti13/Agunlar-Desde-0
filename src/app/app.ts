import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import { Producto } from "./signal/producto";
import { Carrito } from "./computed/carrito";
import { LogManager } from "./effect/log-manager";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Producto, Carrito, LogManager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'my-app';

  datosDelProducto1: Product = {
    name: 'Coca-Cola',
    exist: true,
    price: 1250.0,
    cant: 0
  }

  datosDelProducto2: Product = {
    name: 'Pepsi',
    exist: true,
    price: 1250.0,
    cant: 0
  }

}
