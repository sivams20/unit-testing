import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CommentsComponent } from './comments.component';
import { of } from 'rxjs/internal/observable/of';
import { CommentsService } from '../service/comments.service';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let commentsService: CommentsService;
  let comments = [{
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eosam sapiente accusantium"
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [CommentsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    commentsService = TestBed.get(CommentsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('comments should be loaded', fakeAsync(() => {
//     spyOn(commentsService, 'fetchComments').and.returnValue(of(comments));
//     component.getComments();
//     expect(component.comments).toEqual(comments);
//     // commentsService.fetchComments().subscribe(builds => {
//     //   expect(builds).toEqual(comments);
//     // });
// }));


  it('comments should be loaded', () => {
    spyOn(commentsService, 'fetchComments').and.returnValue(of(comments));
    component.getComments();
    expect(component.comments).toEqual(comments);
  });


});
