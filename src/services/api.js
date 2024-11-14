// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchTasks = () => axios.get(`${API_URL}/taches`);
export const fetchCategories = () => axios.get(`${API_URL}/categories`);
export const createTask = (task) => axios.post(`${API_URL}/taches`, task);
export const createCategory = (category) => axios.post(`${API_URL}/categories`, category);
export const updateTask = (id, task) => axios.put(`${API_URL}/taches/${id}`, task);
export const updateCategory = (id, category) => axios.put(`${API_URL}/categories/${id}`, category);
export const deleteTask = (id) => axios.delete(`${API_URL}/taches/${id}`);
export const deleteCategory = (id) => axios.delete(`${API_URL}/categories/${id}`);
