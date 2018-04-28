import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {ResultVO} from '../domain/result.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translate(0, 0)'})),
      transition('void => in', [
        style({opacity: 0, transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
      transition('in => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translate(0, 0)'}),
          style({opacity: 1, transform: 'translate(-100px, 0)'}),
          style({opacity: 0, transform: 'translate(100%, 0)'})
        ]))
      ])
    ])
  ],
})
export class AngularComponent implements OnInit {
  todoList: TodoVO[] = [];
  newTodo = new TodoVO();
  tempTodoMap = new Map<number, TodoVO>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTodoList()
      .subscribe(body => {
        this.todoList = body;
        console.log(this.todoList);
      });
  }

  addTodo() {
    this.userService.addTodo(this.newTodo)
      .subscribe(body => {
        console.log(body);
        // todoList 맨앞에 삽입
        this.todoList.unshift(body);
      });
  }

  save(todo: TodoVO) {
    // 템플릿 전환
    todo.isEdited = true;
    // 기존값 저장
    // const tempTodo = new TodoVO();
    // tempTodo.todo_id = todo.todo_id;
    // tempTodo.todo = todo.todo;
    // tempTodo.isFinished = todo.isFinished;

    // deep copy하는 두가지 방법, Object.assign, es6의 spread 연산자
    const tempTodo = Object.assign({}, todo);

    this.tempTodoMap.set(tempTodo.todo_id, tempTodo);
  }

  restore(todo: TodoVO) {
    // 기존값 복원
    const tempTodo = this.tempTodoMap.get(todo.todo_id);
    Object.assign(todo, tempTodo);

    // 템플릿 전환
    todo.isEdited = false;
  }

  modify(todo: TodoVO) {
    this.userService.modifyTodo(todo)
      .subscribe(body => {
        // 기존 todo의 메모리주소를 변경하면 안되고 값만 복사해서 넣어야 한다.
        Object.assign(todo, body);
        console.log(todo);
        // 템플릿 전환
        todo.isEdited = false;
      });
  }

  remove(todo_id: number, index: number) {
    const result = confirm('삭제하시겠습니까?');
    if (result) {
      // remove api 호출하고 성공하면 삭제하기
      this.userService.removeTodo(todo_id)
        .subscribe(body => {
          if (body.result === 0) {
            this.todoList.splice(index, 1);
          }
        });
    }
  }
}
