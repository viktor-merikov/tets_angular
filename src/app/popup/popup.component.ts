import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../posts.service';
import { Comment } from '../posts.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() title: string;
  @Input() commentId: number;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
  commentText: FormControl;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.commentText = new FormControl('Good post man!!!', Validators.required);
  }

  saveComment = () => {
    this.postsService.addComment(this.title, this.commentId, { id: 0, comment: this.commentText.value, comments: [] } as Comment);
    this.closePopupWindow();
  }

  closePopupWindow = () => {
    this.closePopup.emit(false);
  }


}
