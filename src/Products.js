import React from 'react';

function Products({ products, onAddToCart }) {
  return (
    <div className="products" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="card" style={{ width: '18rem', margin: '10px' }}>
          <img src={product.imageUrl} alt={product.name} className="avatar-lg" style={{ width: '100%', height: 'auto', borderTopLeftRadius: 'calc(.375rem - 1px)', borderTopRightRadius: 'calc(.375rem - 1px)' }} />
          <div style={{ padding: '10px' }}>
            <h3 className="font-size-18 text-truncate">{product.name}</h3>
            <p>Cost: ${product.cost}</p>
            <p>In Stock: {product.instock}</p>
            <button onClick={() => onAddToCart(product)} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

