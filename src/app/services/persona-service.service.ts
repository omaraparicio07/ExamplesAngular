import { Injectable,  } from '@angular/core';
import { Persona } from '../entidades/persona';
import { Direccion } from '../entidades/direccion';

@Injectable()
export class PersonaServiceService {
  //Atributos de la clase
  
  //Constructor
  constructor() { }

  //Metodo get que devuelve un array de personas
  getPersona():Array<Persona>{
    //variables del Metodo
    let listPersonas:Array<Persona>=new Array();

    //ciclo crear "i" personas
    for(let i=0;i<10;i++){
     let p:Persona=new Persona();
     p.direccion=new Direccion();
     
     //Asignacion de Atributos para persona
     p.nombre="a"+(i*2);
     p.edad=(i+8)*2;
     p.direccion.id=i;
     listPersonas.push(p);
    //  console.log(p);     
    }

    return listPersonas;
  }

}
