// import React, { useState } from 'react';

// const EditTaskForm = ({ task, onEdit }) => {
//   const [title, setTitle] = useState(task.title);

//   const handleChange = e => {
//     setTitle(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     onEdit({ ...task, title });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={handleChange}
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default EditTaskForm;
