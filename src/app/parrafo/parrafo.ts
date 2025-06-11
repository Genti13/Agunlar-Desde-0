import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafo',
  imports: [],
  templateUrl: './parrafo.html',
  styleUrl: './parrafo.css'
})
export class Parrafo {
  @Input() titulo: string = ''; 
  @Input() parrafo: string = ''; 
}
