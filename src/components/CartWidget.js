import React from 'react';
import { Link } from 'react-router-dom';

// Componente CartWidget que muestra el icono del carrito de compras
function CartWidget() {
    return (
        <Link to="/cart" className="btn btn-outline-light">
            <i className="fas fa-shopping-cart"></i>
        </Link>
    );
}

export default CartWidget;