import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: [ './comments.component.scss' ]
})
export class CommentsComponent implements OnInit {

  public comments: any[];
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentsService.fetchComments().subscribe((result) => {
      this.comments = result;
    });
  }

}
