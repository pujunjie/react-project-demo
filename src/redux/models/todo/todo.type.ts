export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODO_LIST = 'GET_TODO_LIST';

export interface TodoInState {
  id: number;
}

export interface TodoOutState {
  todoList: {
    content: string;
    id: number;
  }[];
}
