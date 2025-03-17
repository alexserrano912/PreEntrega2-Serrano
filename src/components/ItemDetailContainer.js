import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

// Componente ItemDetailContainer que muestra el detalle de un producto
function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, 'items', itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('No such document!');
            }
        };

        fetchItem();
    }, [itemId]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <ItemDetail item={item} />
    );
}

export default ItemDetailContainer;