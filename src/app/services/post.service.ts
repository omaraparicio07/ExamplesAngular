import  { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule }  from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../entidades/post';


@Injectable()
export class PostService {

  constructor(private peticion:HttpClient) { }

  // Metodo para la peticion get al sitio jsonplaceholder.com retorna el observable
  getList():Observable<Post[]>{
    
    return this.peticion.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

// .subscribe(
// //Acciones de Operacion Exitosa 
// (data:Post[])=>{
//   console.log(data);
//   // this.posts=data;
//   // return ;
// }
// ,
// //Acciones de Operacion Fallida 
// (error:any)=>{
//   console.log(error);
//   // return error;
// }
// );//fin del observable metodo get

/* Ejercicio 3
crear un componente ModalComentarios
que consuma un servico http que obtenga los comentarios de un elemento de la tabla1,

comp tablaPOST
class POST id,title,body,userid --- crear su servicio
comp ModalComentarios(id de clase POST ) 
  //
*/ 