import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  openPopup: boolean;
  title: string;
  commentId: number;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.openPopup.subscribe(({ open, title, commentId }) => {
      this.openPopup = open;
      this.title = title;
      this.commentId = commentId;
    });
  }

  closePopup = (event) => {
    this.openPopup = event;
  }

  logout = () => {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
