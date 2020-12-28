import React, { memo, useState, useCallback, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AllState } from '../../../../redux/rootType';
import {
  addTodoAction,
  deleteTodoAction,
  getTodoListAction,
} from '../../../../redux/modules/todo/todo.action';

import TodoItem from './child-components/TodoItem';

import { getTodoParams } from '../../../../utils/get-params-util';

import './todo.css';

export default memo(function Todo() {
  // reduxのstoreからtodoListを取得
  const todoList = useSelector((state: AllState) => state.todoReducer.todoList);
  // react-reduxで提供したdispathのhookを利用
  const dispatch = useDispatch();
  // inputのvalueをリアルタイムで設定
  const [content, setContent] = useState('');

  // inputのvalueが変化するば、該当イベント関数を引き起こす
  const changeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // 追加ボタンのクリック事件
  const addItem = () => {
    if (!content) {
      return;
    }

    const length = todoList.length;
    let id = length > 0 ? todoList[length - 1].id + 1 : 0;
    dispatch(
      addTodoAction({
        content,
        id,
      })
    );
    setContent('');
  };

  // 子コンポネントの削除ボタンのクリック事件（useCallbackのhookを利用する理由：子コンポネントのpropsの事件なので）
  const deleteItem = useCallback(
    (index: number) => {
      dispatch(deleteTodoAction(index));
    },
    [dispatch]
  );

  // 初期でgetTodoListAPIを請求する
  useEffect(() => {
    let params = getTodoParams(1);
    dispatch(getTodoListAction(params));
  }, [dispatch]);

  // 画面のレイアウト
  return (
    <div className="todo-page">
      <h2>Todo</h2>
      <div className="todo-add">
        <input
          className="todo-input"
          type="text"
          value={content}
          onChange={changeContent}
          placeholder="NEW TO DO"
        />
        <button className="todo-button" onClick={addItem}>
          追加
        </button>
      </div>
      <ul className="todo-list">
        {todoList.map((item, index) => {
          return <TodoItem key={item.id} itemData={item} index={index} deleteItem={deleteItem} />;
        })}
      </ul>
    </div>
  );
});
