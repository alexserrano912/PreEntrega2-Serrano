import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

// Componente ItemDetail que muestra el detalle de un producto
function ItemDetail({ item }) {
    const { cart } = useContext(CartContext);
    const isInCart = cart.some(cartItem => cartItem.id === item.id);

    return (
        <div className="container mt-5">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} className="img-fluid" style={{ maxHeight: '300px', width: 'auto', objectFit: 'cover' }} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemQuantitySelector />
            {!isInCart && <AddItemButton item={item} />}
            {isInCart && <p>Este producto ya está en el carrito</p>}
        </div>
    );
}

export default ItemDetail;