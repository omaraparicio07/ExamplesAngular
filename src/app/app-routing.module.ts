import { NgModule } from '@angular/core';
//Modulos para modificar las rutas usando Routes como un arreglo de constantes
import { Routes, RouterModule } from '@angular/router';

//componentes para navegar a las rutas
import { EmpresaComponent } from "./components/empresa/empresa.component";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TablaPostComponent } from './components/tabla-post/tabla-post.component';
import { FormularioDireccionComponent } from './components/formulario-direccion/formulario-direccion.component';
import { HomeComponent } from './components/home/home.component';


//Array para definir las rutas de la aplicacion
const ROUTES: Routes = [
  { path: 'Ejercicio1', component: HomeComponent },
  { path: 'Ejercicio2', component: EmpresaComponent },
  { path: 'Ejercicio3', component: TablaPostComponent },
  { path: 'Ejercicio4', component: FormularioDireccionComponent  },
  { path: ' ', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({

  exports: [
    RouterModule
  ],
  //se le manda la constante con el arreglo de las rutas
  imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule { }
