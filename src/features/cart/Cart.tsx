import React from 'react';
import { useCartStore } from '../cart/useCartStore'; 

export default function Cart() {
  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const clearCart = useCartStore((s) => s.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>🛒 Tu carrito está vacío</p>;

  return (
    <div>
      <h2>🛒 Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> — {item.quantity} x ${item.price}
            <div>
              <button onClick={() => addToCart(item)}>➕</button>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={clearCart}>🧹 Vaciar carrito</button>
    </div>
  );
}
