import React from 'react';
import { Link } from 'react-router-dom';

// Componente Item que muestra un producto en el catálogo
function Item({ id, name, description, price, image }) {
    return (
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text mt-auto">Precio: ${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary mt-auto">View Details</Link>
            </div>
        </div>
    );
}

export default Item;