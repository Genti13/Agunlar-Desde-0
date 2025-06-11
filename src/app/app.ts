import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parrafo } from "./parrafo/parrafo";
import { Descripcion } from './models/descripcion.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parrafo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'my-app';

  descripciones:Descripcion[] = [
    {titulo: "Titulo 1", parrafo: "Este es el texto numero 1"},
    {titulo: "Titulo 2", parrafo: "Este es el texto numero 2"},
    {titulo: "Titulo 7", parrafo: "Este es el texto numero 7"},
  ];

   generarAlerta(descripcion:Descripcion){
    console.log("ENTRI");
    
    alert(`El titulo es: ${descripcion.titulo} y su descripcion dice: ${descripcion.parrafo}`)
  }
  
}
