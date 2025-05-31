import { useEffect } from 'react';
import { useProductStore } from './useProductsStore';
import { useCartStore } from '../cart/useCartStore';

export default function Products() {
const { products, fetchProducts } = useProductStore();
const addToCart = useCartStore((s) => s.addToCart);

useEffect(() => {
fetchProducts();
}, [fetchProducts]);

return (
<div>
    <h2>Productos</h2>
    <ul>
        {products.map((product) => (
        <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => addToCart(product)}>Add+</button>
        </li>
        ))}
    </ul>
    </div>);
}
