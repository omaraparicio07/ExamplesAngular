import { Component,OnInit } from '@angular/core';
import { Post } from '../../entidades/post';
import { Comment } from '@angular/compiler';
//Servicios 
import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-tabla-post',
  templateUrl: './tabla-post.component.html',
  styles: []
})
export class TablaPostComponent implements OnInit {

  posts:Post[];
  comments:Comment[];

  constructor(
    //Inyeccion de Dependencias
    private post:PostService,
    private commentPost:CommentService
  ) { }

  ngOnInit() {
  }
  //Consulta de Los posts existentes
  verTabla(){
    this.post.getList().subscribe(
      (data:Post[])=>{
        console.log(data);
        this.posts=data;
        
      },
      (error)=>{
        console.error(error);
      }
    );
  }
  //Consulta de comentarios a traves del ID del Post
  onPostSelected(idComment){
    this.commentPost.getList(idComment).subscribe(
      (data)=>{
        console.log(data);
        // this.comments=data;
        
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
