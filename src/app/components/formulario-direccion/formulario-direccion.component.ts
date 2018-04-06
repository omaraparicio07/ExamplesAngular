import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,  Validators } from '@angular/forms';
import { Direccion } from '../../entidades/direccion';

@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styles: []
})
export class FormularioDireccionComponent implements OnInit {
  @Output() direccionP=new EventEmitter();
  
  dir:Direccion=new Direccion();
  dirArray:Direccion[]=new Array<Direccion>();
  formAdress: FormGroup;
  
  
  constructor(
    private formA: FormBuilder
  ) { }
  
  ngOnInit() {
    this.formAdress=this.formA.group({
      id: ['',Validators.required],
      calle: ['',[Validators.required,Validators.minLength(0)],],
      colonia:['',Validators.required],
      pais:['',Validators.required]
    });
    
  }
  
  direccionOut(event){
    this.dir=this.formAdress.value;
    this.dirArray.push(this.dir);
    
    this.dir=new Direccion();
    this.direccionP.emit(this.dirArray);
    //forma de acceder a las propiedades definidas en el group
    // console.log(this.formAdress.controls['id'].value);
    if (this.formAdress.valid) {
    }else{
      alert("Verificar los campos");
    }
    
    
    // return ;
  }
  
}

// this.formAdress=new FormGroup({
  //   id: new FormControl(''),
  //   calle:  new FormControl(''),
  //   colonia:  new FormControl(''),
  //   pais: new FormControl('')
  // });
  // console.log(this.formAdress);