// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import './App.css';


function App() {
    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleTaskSaved = () => setSelectedTask(null);
    const handleCategorySaved = () => setSelectedCategory(null);

    return (
        <div className="App">
            <h1>ToDo List</h1>

            <div>
                <TaskForm selectedTask={selectedTask} onSaved={handleTaskSaved} />
                <TaskList onSelect={setSelectedTask} />
            </div>

            <div>
                <CategoryForm selectedCategory={selectedCategory} onSaved={handleCategorySaved} />
                <CategoryList onSelect={setSelectedCategory} />
            </div>
        </div>
    );
}

export default App;
