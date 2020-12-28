import { TodoOutState } from './models/todo/todo.type';

export interface Action {
  type: string;
  value?: any;
}

export interface AllState {
  todoReducer: TodoOutState;
}
