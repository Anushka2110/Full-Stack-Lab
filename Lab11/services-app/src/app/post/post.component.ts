import { Component, OnInit, Input } from '@angular/core';
import 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService) { 

    console.log(`post component loaded..`);
  }

  createPost(input: HTMLInputElement) {
    // create a post object, with field to create
    let post = { title: input.value };
    input.value = '';
    
   this.service.createPost(post)
        .subscribe(response => {
          // get the response post id and push to top of list
          post['id'] = response.json().id;
          this.posts.splice(0,0,post);
        });
  }

  updatePost(post): void {
    console.log(`update post: ${post.title}`);

    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      })
  }

  deletePost(post): void {
    console.log(`delete post: ${post.title}`);

    this.service.deletePost(post.id)
      .subscribe(response => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index, 1);        
      })
  }

  ngOnInit() {
    
    this.service.getPosts()
    .subscribe(response => {
      console.log(response.json());
      this.posts = response.json();

    })
  }

}
