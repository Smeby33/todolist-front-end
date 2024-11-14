// src/components/CategoryList.js
import React, { useEffect, useState } from 'react';
import { fetchCategories, deleteCategory } from '../services/api';

const CategoryList = ({ onSelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        const response = await fetchCategories();
        setCategories(response.data);
    };

    const handleDelete = async (id) => {
        await deleteCategory(id);
        loadCategories();
    };

    return (
        <div>
            <h2>Catégories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id_categorie}>
                        {category.categorie}
                        <div>
                            <button onClick={() => handleDelete(category.id_categorie)} style={{ backgroundColor: '#E74C3C' }}>Supprimer</button>
                            <button onClick={() => onSelect(category)} style={{ backgroundColor: '#F39C12' }}>Modifier</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
