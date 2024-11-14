// src/components/CategoryForm.js
import React, { useState, useEffect } from 'react';
import { createCategory, updateCategory } from '../services/api';

const CategoryForm = ({ selectedCategory, onSaved }) => {
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        setCategoryName(selectedCategory ? selectedCategory.categorie : '');
    }, [selectedCategory]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedCategory) {
            await updateCategory(selectedCategory.id_categorie, { categorie: categoryName });
        } else {
            await createCategory({ categorie: categoryName });
        }
        setCategoryName('');
        onSaved();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedCategory ? 'Modifier' : 'Ajouter'} une Catégorie</h2>
            <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Nom de la catégorie"
                required
            />
            <button type="submit">{selectedCategory ? 'Modifier' : 'Ajouter'}</button>
        </form>
    );
};

export default CategoryForm;
