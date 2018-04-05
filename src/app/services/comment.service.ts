import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../entidades/comment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CommentService {
    constructor( private http:HttpClient) {
        
    }

    getList(idPost:number):Observable<Comment[]>{
        return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/posts/"+idPost+"/comments");
    }

    // post
}