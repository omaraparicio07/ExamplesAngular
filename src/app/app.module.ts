//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//Modulo de Formularios
import { HttpClientModule } from '@angular/common/http';

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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmpresaComponent,
    TarjetaPresentacionComponent,
    FormularioPersonaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  // Servicios para toda la app
  providers: [PersonaServiceService,PostService,CommentService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
