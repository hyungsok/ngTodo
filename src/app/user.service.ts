import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TodoVO} from './domain/todo.vo';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get('http://www.javabrain.kr:8080/api/todo');
  }
}
