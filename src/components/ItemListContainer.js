import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import './ItemListContainer.css'; // Importar estilos personalizados

// Componente ItemListContainer que recibe una prop 'greeting' y muestra el mensaje
function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            let q = collection(db, 'items');
            if (categoryId) {
                q = query(q, where('category', '==', categoryId));
            }
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log('Fetched items:', data); // Log para depuración
            setItems(data);
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className="container mt-5">
            <div className="banner mb-4 text-center">
                <img src="https://i.postimg.cc/k56DrSj1/metal-merch.jpg" alt="Metal Merch Banner" className="img-fluid" style={{ maxHeight: '300px', width: 'auto', objectFit: 'cover' }} />
            </div>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;