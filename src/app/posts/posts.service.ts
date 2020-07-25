import { Injectable } from '@angular/core';
import { Post } from './post.model';


//creates only one instance of this class.
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts : Post[] = [];
  constructor() { }

  addPost(title: String, content: String){
    const post = { title : title, content : content };
    this.posts.push(post);    
  }

  getPosts(){
    //returning copy of posts rather than ref type
    return [...this.posts];
  }
}
