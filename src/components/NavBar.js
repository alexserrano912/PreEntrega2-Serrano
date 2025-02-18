import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

// Componente NavBar que renderiza la barra de menú
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Logo de la tienda */}
                <Link className="navbar-brand" to="/">
                    <img src="https://i.gifer.com/TGkt.gif" alt="Metal Merch Logo" width="30" height="30" className="d-inline-block align-top" />
                    Metal Merch
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/heavymetal">Heavy Metal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/glammetal">Glam Metal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/thrashmetal">Thrash Metal</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;