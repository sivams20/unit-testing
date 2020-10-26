import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { commentModel } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  fetchComments() {
    return this.http.get<commentModel[]>(this.baseUrl + 'comments');
  }

  addComments(comment) {
    const headers = new HttpHeaders();
    return this.http.post<commentModel>(this.baseUrl + 'comments', comment);
  }

}
