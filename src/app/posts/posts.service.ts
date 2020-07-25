import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';


//creates only one instance of this class.
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts : Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    //returning copy of posts rather than ref type
    return [...this.posts];
  }

  getPostUpdateListner(){
    return this.postUpdated.asObservable();
  }

  addPost(title: String, content: String){
    const post = { title : title, content : content };
    this.posts.push(post);   
    this.postUpdated.next([...this.posts]); 
  }

}
