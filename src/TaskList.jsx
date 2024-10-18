
import React, { useState } from 'react';
const TaskList = () => {
const [tasks, setTasks] = useState([]);

React.useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => setTasks(data))
.catch((error) => console.error('Error fetching tasks:', error));
}, []); 

return (
<div className="container mt-5">
<h2>Lista de Tareas</h2>
<ul>
{tasks.map((task) => (
<li key={task.id}>{task.title}</li>
))}
</ul>
</div>
);};

export default TaskList;