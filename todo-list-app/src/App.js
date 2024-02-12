import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import AddTaskForm from './components/AddTaskForm.js';
// import EditTaskForm from './components/EditTaskForm.js';
import TaskPriorityFilter from './components/TaskPriorityFilter.js';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = title => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
      priority: 'low',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // const editTask = editedTask => {
  //   setTasks(
  //     tasks.map(task =>
  //       task.id === editedTask.id ? { ...task, title: editedTask.title } : task
  //     )
  //   );
  // };

  const filterTasks = priority => {
    if (priority === 'all') {
      setFilter('all');
    } else {
      setFilter(priority);
    }
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.priority === filter);

  return (
    <div className="container">
      <h1 className='list'>Todo List</h1>
      <TaskPriorityFilter onChange={filterTasks} />
      <TaskList
        tasks={filteredTasks}
        onToggleStatus={toggleStatus}
        onDelete={deleteTask}
      />
      <AddTaskForm onAdd={addTask} />
    </div>
  );
};

export default App;

