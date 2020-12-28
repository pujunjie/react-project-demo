import { Dispatch } from 'redux';
import { ADD_TODO, DELETE_TODO, GET_TODO_LIST, TodoInState } from '../../models/todo/todo.type';
import { getTodoList } from '../../api/api';

export const getTodoListAction = (params: TodoInState) => {
  return async (dispatch: Dispatch) => {
    try {
      let res = await getTodoList(params);
      dispatch({
        type: GET_TODO_LIST,
        value: (res as any).outputInfo.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addTodoAction = (todoItem: any) => {
  return {
    type: ADD_TODO,
    value: todoItem,
  };
};

export const deleteTodoAction = (index: number) => {
  return {
    type: DELETE_TODO,
    value: index,
  };
};
