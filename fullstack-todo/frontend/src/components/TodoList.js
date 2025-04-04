import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/todos/");
        setTasks(response.data);
    };

    const addTask = async () => {
        await axios.post("http://127.0.0.1:8000/api/todos/", { title, completed: false });
        fetchTasks();
        setTitle("");
    };

    const toggleTask = async (id, completed) => {
        await axios.patch(`http://127.0.0.1:8000/api/todos/${id}/`, { completed: !completed });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
        fetchTasks();
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.completed ? "line-through" : "none" }}
                            onClick={() => toggleTask(task.id, task.completed)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
