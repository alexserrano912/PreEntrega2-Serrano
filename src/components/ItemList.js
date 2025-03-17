import React from 'react';
import Item from './Item';

// Componente ItemList que recibe una lista de items y los muestra
function ItemList({ items }) {
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-4 mb-4" key={item.id}>
                    <Item {...item} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;