// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../services/api';

const TaskList = ({ onSelect }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await fetchTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <div>
            <h2>Tâches</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id_tache}>
                        {task.tache} - {task.date}
                        <div>
                            <button onClick={() => handleDelete(task.id_tache)} style={{ backgroundColor: '#E74C3C' }}>Supprimer</button>
                            <button onClick={() => onSelect(task)} style={{ backgroundColor: '#F39C12' }}>Modifier</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
