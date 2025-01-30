import React from 'react';
import CartWidget from './CartWidget';
// Componente NavBar que renderiza la barra de menú
function NavBar() {
return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#1a1a1a', color: 'white', alignItems: 'center' }}>
    <h1 style={{ fontFamily: 'Arial Black, sans-serif' }}>Metal Merch</h1>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li><a href="#heavymetal" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Heavy Metal</a></li>
        <li><a href="#glammetal" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Glam Metal</a></li>
        <li><a href="#thrashmetal" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Thrash Metal</a></li>
    </ul>
    <CartWidget />
    </nav>
);
}

export default NavBar;