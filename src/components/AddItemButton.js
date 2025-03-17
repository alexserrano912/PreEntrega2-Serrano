import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Componente AddItemButton que permite agregar un producto al carrito
function AddItemButton({ item }) {
    const { addItem } = useContext(CartContext);

    const handleAddItem = () => {
        addItem(item);
    };

    return (
        <button className="btn btn-primary mt-3" onClick={handleAddItem}>Agregar al carrito</button>
    );
}

export default AddItemButton;