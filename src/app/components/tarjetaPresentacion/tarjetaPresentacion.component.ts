import { Component ,Input , OnInit } from '@angular/core';
import { Persona } from '../../entidades/persona';

@Component({
  selector: 'app-tarjetaPresentacion',
  templateUrl: './tarjetaPresentacion.component.html',
  styles: []
})
export class TarjetaPresentacionComponent implements OnInit {
  // Decorador para agregar una entrada de algun otro componente
 @Input('inPersona') persona:Persona;  
  
  constructor() { }

  ngOnInit() {

  }

}
