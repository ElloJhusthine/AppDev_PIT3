import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add Task
  const handleAdd = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Delete Task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Pending/Completed
  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit Task
  const handleEdit = (id) => {
    const newText = prompt("Edit task:");
    if (newText && newText.trim() !== "") {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    }
  };

  // Filter tasks based on the selected filter
  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => (filter === "completed" ? task.completed : !task.completed));

  // Toggle Dark Mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: isDarkMode ? "#2d2d2d" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>To-Do List</h1>
      
      {/* Dark Mode Toggle Button */}
      <button
        onClick={handleDarkModeToggle}
        style={{
          background: isDarkMode ? "#333" : "#ccc",
          color: isDarkMode ? "#fff" : "#000",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      >
        Toggle Dark Mode
      </button>

      {/* Input and Add Task */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task"
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, padding: "8px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "8px 12px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </div>

      {/* Task Filter */}
      <div style={{ marginBottom: "16px" }}>
        <button onClick={() => setFilter("all")} style={buttonStyle}>All</button>
        <button onClick={() => setFilter("completed")} style={buttonStyle}>Completed</button>
        <button onClick={() => setFilter("pending")} style={buttonStyle}>Pending</button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: isDarkMode ? "#444" : "#f9f9f9",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => handleEdit(task.id)}
                style={{
                  color: "orange",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                style={{
                  color: "red",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Button styling for filter
const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "8px",
};

export default App;
