import  { Component, OnInit } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import  { PostService }  from  '../../services/post.service';
import { Post } from '../../entidades/post';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  

  // posts:{userId:number,id:number,title:string,body:string}[];
  // pruebaPost:Post[];

  // constructor(private postService:PostService,private http:HttpClient , private commentService:CommentService) { }

  ngOnInit() {
    // this.mostrarConsola();
  }
  
  // mostrarConsola(){
  //   this.postService.getList().subscribe(
  //     (data:Post[] )=>{
  //       this.pruebaPost=data;
  //       console.log(data);
  //       console.log(this.pruebaPost);
        
        
  //     },
  //     (error)=>{
        
  //     }
      
  //   );
  //   console.log(this.pruebaPost);
    
  // }
  
  // onPostSelected(idPost:number){
  //   this.commentService.getList(idPost).subscribe(
  //     (data)=>{
  //       console.log(data);
  //       alert(data);
  //     }
  //     ,
  //     (error)=>{
  //       console.log(error);
  //       alert(error);
        
  //     }
  //   );
  // }
  
}

/* Ejercicio 3
crear un componente ModalComentarios
que consuma un servico http que obtenga los comentarios de un elemento de la tabla1,

comp tablaPOST
class POST id,title,body,userid --- crear su servicio
comp ModalComentarios(id de clase POST ) 
//
*/ 


//ejemplo peticion http 
// this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
//   (data:{userId:number,id:number,title:string,body:string}[])=>{
//     console.log(data);
//     this.posts = data;
    
//   },(error)=>{
//     console.error( error);
    
//   }
// )