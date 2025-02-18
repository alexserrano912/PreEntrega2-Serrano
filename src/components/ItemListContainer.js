import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

// Componente ItemListContainer que recibe una prop 'greeting' y muestra el mensaje
function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Simulación de una llamada a una API para obtener los productos
        const fetchItems = async () => {
            // Simulación de datos de productos
            const data = [
                {
                    id: 1,
                    name: 'Pantera - Power Metal',
                    description: 'Remera de Pantera - Power Metal',
                    price: 20000,
                    image: 'https://besteesrock.com/shop_imgs/products/9239b0812e708a6daa65cb04a165f974.jpg'
                },
                {
                    id: 2,
                    name: 'Iron Maiden - Argentina 2024',
                    description: 'Remera temática de Iron Maiden - Argentina 2024',
                    price: 35000,
                    image: 'https://cdn-ijfed.nitrocdn.com/DtYdoFkTGLHFYfuSCOprrunYCajuUVPb/assets/images/optimized/rev-718321c/mariskalrock.com/wp-content/uploads/2024/12/iron-maiden-camiseta-exclusiva-buenos-aires-argentina-2024-foto-guillermo-gonzalez.jpg'
                },
                {
                    id: 3,
                    name: 'Against Tour 2024',
                    description: 'Remera Against Tour 2024',
                    price: 15000,
                    image: 'https://i.postimg.cc/3rdV0s1v/against-remera.png'
                }
            ];

            // Filtrar productos por categoría si se proporciona una categoría
            const filteredData = categoryId ? data.filter(item => item.category === categoryId) : data;
            setItems(filteredData);
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className="container mt-5">
            <div className="banner mb-4 text-center">
                <img src="https://i.postimg.cc/k56DrSj1/metal-merch.jpg" alt="Metal Merch Banner" className="img-fluid" style={{ maxHeight: '200px', width: 'auto', objectFit: 'cover' }} />
            </div>
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;