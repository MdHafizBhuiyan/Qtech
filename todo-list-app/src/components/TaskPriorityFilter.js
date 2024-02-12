import React from 'react';

const TaskPriorityFilter = ({ onChange }) => {
  const handlePriorityChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className="priority-filter">
      <select onChange={handlePriorityChange}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TaskPriorityFilter;
