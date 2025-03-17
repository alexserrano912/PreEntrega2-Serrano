import React, { useState } from 'react';

// Componente ItemQuantitySelector que permite seleccionar la cantidad de un producto
function ItemQuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-secondary" onClick={handleDecrease}>-</button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-secondary" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default ItemQuantitySelector;