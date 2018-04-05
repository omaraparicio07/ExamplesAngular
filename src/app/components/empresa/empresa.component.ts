import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../entidades/persona';
//servicios
import { PersonaServiceService } from '../../services/persona-service.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',

})
export class EmpresaComponent implements OnInit {

  lPersonas:Array<Persona>;
  persona:Persona;
  constructor(private ps:PersonaServiceService) { }

  ngOnInit() {
    // consumo del servicio getPersona
    // console.log(this.lPersonas);
    this.lPersonas=this.ps.getPersona();
    
  }
  
  agregarPersona( p:Persona):void{
    this.persona=p;
    this.lPersonas.push(this.persona);
    return ;
    
  }

}
