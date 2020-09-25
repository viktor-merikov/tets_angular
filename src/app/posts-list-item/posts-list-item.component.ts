import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent implements OnInit {

  @Input() post: any;
  expanded: boolean;
  currentVoteCount: number = 0;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.expanded = false;
    this.updateVoteCount();
  }

  updateVoteCount = () => {
    this.currentVoteCount = 0;
    this.post.votes.forEach(({ value }) => this.currentVoteCount = value + this.currentVoteCount);
  }

  openModalComment = (title: string, commentId?: number) => {
    this.postsService.openPopup.next({ open: true, title, commentId });
  }

  setVote = (value) => {
    const res = this.postsService.setVote(this.post.title, { value: value, username: localStorage.getItem('username') });
    alert(res);
    this.updateVoteCount();
  }

}
