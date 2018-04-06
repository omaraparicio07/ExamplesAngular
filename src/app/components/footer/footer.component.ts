import { Component, OnInit,Input } from '@angular/core';
import { Direccion } from '../../entidades/direccion';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saludo(dir:Direccion[]):void{
    console.log("repecion desde FormReactivo");
    console.log(dir);
    let dirA:Direccion[]=dir;
    
    
  }
}
