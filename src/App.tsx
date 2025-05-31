import { useState } from 'react';
import './App.css';
import Products from './features/products/Products';
import Cart from './features/cart/Cart';

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleColor = () => {
    const fondo = modoOscuro ? '#fff' : '#000';
    const texto = modoOscuro ? '#000' : '#fff';
    document.documentElement.style.setProperty('--color-fondo', fondo);
    document.documentElement.style.setProperty('--color-texto', texto);

    setModoOscuro(!modoOscuro);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={toggleColor}>
        Cambiar a {modoOscuro ? 'claro' : 'oscuro'}
      </button>
      <Products />
      <Cart />
    </div>
  );
}
