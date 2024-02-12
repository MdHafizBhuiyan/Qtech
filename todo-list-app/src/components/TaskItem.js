import React from 'react';

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  const { id, title, completed } = task;

  const toggleStatus = () => {
    onToggleStatus(id);
  };

  const deleteTask = () => {
    onDelete(id);
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={toggleStatus} />
      <span className='list-text'>{title}</span>
      <button className='addBtn' onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
