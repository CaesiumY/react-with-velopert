import React, { useCallback } from 'react';
import cn from 'classnames';
import './TodoListItem.scss';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;

  const onClickRemoveButton = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onClickRemoveButton}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
