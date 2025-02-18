import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Componente ItemDetailContainer que muestra el detalle de un producto
function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Simulación de una llamada a una API para obtener el detalle del producto
        const fetchItem = async () => {
            const response = await fetch(`/api/items/${itemId}`);
            const data = await response.json();
            setItem(data);
        };

        fetchItem();
    }, [itemId]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
        </div>
    );
}

export default ItemDetailContainer;