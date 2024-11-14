// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { createTask, updateTask, fetchCategories } from '../services/api';

const TaskForm = ({ selectedTask, onSaved }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setTaskName(selectedTask ? selectedTask.tache : '');
        setTaskDate(selectedTask ? selectedTask.date : '');
        setCategoryId(selectedTask ? selectedTask.id_categorie : '');
        loadCategories();
    }, [selectedTask]);

    const loadCategories = async () => {
        const response = await fetchCategories();
        setCategories(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { tache: taskName, date: taskDate, id_categorie: categoryId };
        if (selectedTask) {
            await updateTask(selectedTask.id_tache, taskData);
        } else {
            await createTask(taskData);
        }
        setTaskName('');
        setTaskDate('');
        setCategoryId('');
        onSaved();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedTask ? 'Modifier' : 'Ajouter'} une Tâche</h2>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Nom de la tâche"
                required
            />
            <input
                type="text"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                placeholder="Date"
                required
            />
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                <option value="">Choisir une catégorie</option>
                {categories.map((category) => (
                    <option key={category.id_categorie} value={category.id_categorie}>
                        {category.categorie}
                    </option>
                ))}
            </select>
            <button type="submit">{selectedTask ? 'Modifier' : 'Ajouter'}</button>
        </form>
    );
};

export default TaskForm;
