import { Component } from '@angular/core';
import { Direccion } from './entidades/direccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  // dirFormReactive(){
  // console.log("Recepcion de FormReactive");      
  // }

  saludo(dir:Direccion[]):void{
    console.log("repecion desde FormReactivo");
    console.log(dir);
    let dirA:Direccion[]=dir;
    
    
  }
  
}