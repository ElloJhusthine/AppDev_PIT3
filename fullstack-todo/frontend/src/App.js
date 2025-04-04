import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
            <TodoList />
        </div>
    );
}

export default App;
