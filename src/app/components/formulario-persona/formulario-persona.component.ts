import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Persona } from '../../entidades/persona';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
})
export class FormularioPersonaComponent implements OnInit {
  @Output()
  // outPerson:EventEmitter<Persona>=new EventEmitter<Persona>();
  outPerson =new EventEmitter();
   
  nvaPersona:Persona=new Persona();
  constructor() { }
  //funcion click submit 
  cSubmit(event){
    console.log("click on Submit");
    console.log(this.nvaPersona);
    this.outPerson.emit(this.nvaPersona);
    this.nvaPersona = new Persona();
    
  }
  ngOnInit() {
  }

}
