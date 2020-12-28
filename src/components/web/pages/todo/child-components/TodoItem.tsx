import React, { memo } from 'react';

import './todo-item.css';

interface AllProps {
  itemData: {
    content: string;
    id: number;
  };
  index: number;
  deleteItem(index: number): void;
}

export default memo(function TodoItem(props: AllProps) {
  const { index, itemData } = props;
  const { content } = itemData;
  console.log('item render');

  const deleteItem = () => {
    props.deleteItem(index);
  };
  return (
    <li className="todo-item">
      <div>{content}</div>
      <button className="todo-button" onClick={deleteItem}>
        削除
      </button>
    </li>
  );
});
