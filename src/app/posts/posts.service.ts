import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'


//creates only one instance of this class.
@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts : Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http : HttpClient){}

  getPosts(){
    this.http.get<{message: String, posts: Post[]}>("http://localhost:3000/api/posts")
    .subscribe((postData) => {
       this.posts = postData.posts;
       this.postUpdated.next([...this.posts]);
    });
    //returning copy of posts rather than ref type
    return [...this.posts];
  }

  getPostUpdateListner(){
    return this.postUpdated.asObservable();
  }

  addPost(title: String, content: String){
    const post = { id: null, title : title, content : content };
    this.posts.push(post);   
    this.postUpdated.next([...this.posts]); 
  }
}
