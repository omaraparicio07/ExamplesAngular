//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Modulo de Formularios y formularios reactivos
import { HttpClientModule } from '@angular/common/http';//Modulo Http para consultas


//Routes -- rutas para navegar en la aplicacion
import { AppRoutingModule } from './/app-routing.module';
// import { RouterModule } from '@angular/router';

//Servicios
import { PersonaServiceService } from './services/persona-service.service';
import { PostService }  from './services/post.service';
import {  CommentService  } from './services/comment.service';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { TarjetaPresentacionComponent } from './components/tarjetaPresentacion/tarjetaPresentacion.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPostComponent } from './components/tabla-post/tabla-post.component';
import { FormularioDireccionComponent } from './components/formulario-direccion/formulario-direccion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmpresaComponent,
    TarjetaPresentacionComponent,
    FormularioPersonaComponent,
    NavbarComponent,
    TablaPostComponent,
    FormularioDireccionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule 
    // RouterModule.forRoot(ROUTES[])
  ],
  // Servicios para toda la app
  providers: [PersonaServiceService,PostService,CommentService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
