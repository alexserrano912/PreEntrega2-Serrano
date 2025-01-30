import React from 'react';
// Componente ItemListContainer que recibe una prop 'greeting' y muestra el mensaje
function ItemListContainer({ greeting }) {
return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#121212', color: 'white', fontSize: '1.5rem' }}>
    <h2>{greeting}</h2>
    </div>
);
}

export default ItemListContainer;