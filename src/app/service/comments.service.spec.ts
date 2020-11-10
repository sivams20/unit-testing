import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommentsService } from './comments.service';
import { commentModel } from '../model/comment';
import { HttpErrorResponse } from '@angular/common/http';

describe('CommentsService', () => {
  let httpTestCtrl: HttpTestingController;
  let service: CommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CommentsService ]
    });
    service = TestBed.inject(CommentsService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test http get', () => {
    const testComments: commentModel[] = [
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      } ];

    service.fetchComments().subscribe((comments => {
      expect(testComments).toBe(comments);
    }));

    const req = httpTestCtrl.expectOne(service.baseUrl + 'comments');
    expect(req.cancelled).toBeFalsy();

    req.flush(testComments);
  });

  it('should add new comments', () => {
    const postComment: commentModel = {
      "postId": 4,
      "id": 4,
      "name": "Balu",
      "email": "balu.raj@xpo.com",
      "body": "Sample Comment"
    };

    service.addComments(postComment).subscribe((newComment) => {
      expect(newComment).toBe(postComment);
    });
    const req = httpTestCtrl.expectOne(service.baseUrl + 'comments');
    expect(req.cancelled).toBeFalsy();
    req.flush(postComment);
  });

  it('throws 404 error', () => {
    service.fetchComments().subscribe(
      data => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 error');
      }
    );
    const req = httpTestCtrl.expectOne(service.baseUrl + 'comments');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });

});
