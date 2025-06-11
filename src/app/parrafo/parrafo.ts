import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { Descripcion } from '../models/descripcion.interface';


@Component({
  selector: 'app-parrafo',
  imports: [],
  templateUrl: './parrafo.html',
  styleUrl: './parrafo.css'
})
export class Parrafo {
  //titulo = input.required<string>();
  //parrafo = input.required<string>();

  @Input() titulo: string = '';
  @Input() parrafo: string = '';

  @Output() mensajeAlerta = new EventEmitter<Descripcion>();

  eventoAlerta() {
    this.mensajeAlerta.emit({
      titulo: this.titulo,
      parrafo: this.parrafo
    });
  }
}
