import React from 'react';
// Componente CartWidget que muestra un ícono de carrito y una notificación con un número fijo
function CartWidget() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span role="img" aria-label="carrito" style={{ fontSize: '1.5rem' }}>🛒</span>
            <span style={{ backgroundColor: '#ff0000', color: 'white', borderRadius: '50%', padding: '5px 10px', fontSize: '1rem' }}>3</span>
        </div>
    );
}

export default CartWidget;