import React from 'react';
import TaskItem from "../components/TaskItem.js";

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
