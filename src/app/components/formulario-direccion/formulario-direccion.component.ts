import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styles: []
})
export class FormularioDireccionComponent implements OnInit {
  formAdress: FormGroup;

  constructor(
    private formA: FormBuilder
      ) { }

  ngOnInit() {
    this.formA.group({
      id:,
      calle:"",
      colonia:"",
      pais:""
    });
  }

}
