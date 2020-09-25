import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService, Post } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {

  form: FormGroup;
  imageUrl: string;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl('', Validators.required)
    })
  }

  createPost = () => {
    const { title, imageUrl } = this.form.value;
    const newPost: Post = {
      title,
      imageUrl,
      date: Date.now(),
      comments: [],
      username: localStorage.getItem('username'),
      votes: []
    }
    this.postsService.addPost(newPost);
    this.returnToMain();
  }

  changeImageUrl = (event) => {
    this.imageUrl = event.target.value;
  }

  returnToMain() {
    this.router.navigate(["/main"]);
  }
}
