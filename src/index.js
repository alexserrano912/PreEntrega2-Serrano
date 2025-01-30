import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Crear el root para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderizar el componente App dentro del root
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);