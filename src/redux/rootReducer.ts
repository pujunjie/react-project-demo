import { combineReducers } from 'redux';
import todoReducer from './modules/todo/todo.reducer';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
