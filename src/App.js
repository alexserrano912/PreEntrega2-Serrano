import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// Componente principal de la aplicación
function App() {
return (
    <div>
 {/* Componente NavBar */}
<NavBar />
      {/* Componente ItemListContainer con prop 'greeting' */}
    <ItemListContainer greeting="🔥 ¡Bienvenido al templo del Metal! 🔥" />
    </div>
);
}

export default App;