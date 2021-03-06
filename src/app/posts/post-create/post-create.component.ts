import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
    newPost = 'No content';
    enteredValue = '';
    enteredTitle = '';

    //injecting PostsService to use in this class 
    constructor(public postService: PostsService) { }

    onAddPost(form : NgForm){
        if (form.invalid)
            return

        this.postService.addPost(form.value.title, form.value.content);
        form.reset();
    }
}