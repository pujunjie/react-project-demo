import { TodoInState } from '../redux/models/todo/todo.type';

export function getTodoParams(id: number) {
  let params: TodoInState = {
    id,
  };
  return params;
}
