import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Comment {
  id: number,
  comment: string,
  username?: string,
  comments: Comment[]
}

export interface Vote {
  value: 1 | -1,
  username: string
}

export interface Post {
  title: string,
  imageUrl: string,
  date: number,
  username: string,
  comments: Comment[],
  votes: Vote[]
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  openPopup = new Subject();

  data: Post[] = [
    {
      title: 'Full moon rising over Mount Hood',
      imageUrl: 'https://photorator.com/photos/images/july-nd-full-moon-rising-over-mt-hood-oregon--24272.jpg',
      date: Date.now(),
      username: 'Viktor87',
      comments: [
        {
          id: 1, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [
            { id: 11, comment: 'This is peace of story', username: 'someuser', comments: [] },
            { id: 11, comment: 'This is peace of story', username: 'someuser', comments: [] }
          ]
        },
        {
          id: 2, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [
            { id: 11, comment: 'This is peace of story', username: 'someuser', comments: [] },
          ]
        },
        { id: 3, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 4, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 5, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        {
          id: 6, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [
            { id: 11, comment: 'This is peace of story', username: 'someuser', comments: [] },
          ]
        },
        { id: 7, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] }
      ],
      votes: [
        { value: 1, username: 'Anton' },
        { value: -1, username: 'Larisa' },
        { value: 1, username: 'Viktor87' }
      ]
    },
    {
      title: 'Tree sunset amazing',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: Date.now(),
      username: 'Anton2013',
      comments: [
        { id: 1, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 2, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 3, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 4, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 5, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 6, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] },
        { id: 7, comment: 'asdgkmsekg sgjmsjgokjsr iogjhreiog ruh gioruegh reh', username: 'user1', comments: [] }
      ],
      votes: [
        { value: 1, username: 'Anton' },
        { value: -1, username: 'Larisa' },
        { value: 1, username: 'Viktor87' }
      ]
    },
    {
      title: 'Area near Kimacolm well',
      imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B62B/production/_108553664_knapps.png',
      date: Date.now(),
      username: 'Viktor87',
      comments: [],
      votes: [
        { value: 1, username: 'Anton' },
        { value: -1, username: 'Larisa' },
        { value: 1, username: 'Viktor87' }
      ]
    }
  ]

  getPosts = () => this.data;

  addPost = (post: Post) => this.data.push(post);

  addComment = (title, commentId, newComment: Comment) => {
    const postIndex = this.data.findIndex(post => post.title === title);
    const currentComment = this.data[postIndex].comments.find(comment => comment.id === commentId);
    newComment.id = currentComment ? currentComment.comments.length + 1 : this.data[postIndex].comments.length + 1;
    newComment.username = localStorage.getItem('username');
    currentComment ? currentComment.comments.push(newComment) : this.data[postIndex].comments.push(newComment);
  }

  setVote = (title, vote: Vote) => {
    const postIndex = this.data.findIndex(post => post.title === title);
    const votedUser = this.data[postIndex].votes.findIndex(vote => vote.username === localStorage.getItem('username'));
    console.log(votedUser);

    if (votedUser === -1) {
      this.data[postIndex].votes.push(vote);
      return 'Your vote is received';
    } else {
      return 'You have already voted';
    }
  }

}
