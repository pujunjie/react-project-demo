import produce from 'immer';
import { TodoOutState, ADD_TODO, DELETE_TODO, GET_TODO_LIST } from '../../models/todo/todo.type';
import { Action } from '../../rootType';

const defaultState: TodoOutState = {
  todoList: [],
};

const reducer = (state = defaultState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TODO:
        draft.todoList.push(action.value);
        break;
      case DELETE_TODO:
        draft.todoList.splice(action.value, 1);
        break;
      case GET_TODO_LIST:
        draft.todoList = action.value.todoList;
        break;
    }
  });

export default reducer;
