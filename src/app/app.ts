import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parrafo } from "./parrafo/parrafo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parrafo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app';

  descripciones = [
    {titulo: "Titulo 1", parrafo: "Este es el texto numero 1"},
    {titulo: "Titulo 2", parrafo: "Este es el texto numero 2"},
    {titulo: "Titulo 3", parrafo: "Este es el texto numero 3"},
  ];

}
