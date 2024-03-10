import React, { useState, useEffect } from 'react';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout'; 
import Restock from './Restock';


function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const apiUrl = "http://localhost:1337/api/products"; // Replace with your actual Strapi API endpoint

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        const transformedProducts = result.data.map(item => ({
          id: item.id,
          name: item.attributes.name,
          cost: item.attributes.cost,
          instock: item.attributes.instock,
          imageUrl: `https://picsum.photos/180/180?random=${item.id}` // Add a random image for each product
        }));
        setProducts(transformedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    

    fetchProducts();
  }, []);

  const handleAddToCart = (productToAdd) => {
    // Check if the product is already in the cart and its stock
    const productInCart = cartItems.find(item => item.name === productToAdd.name);
    const productInStock = products.find(product => product.name === productToAdd.name);
  
    // If the product is out of stock
    if (productInStock.instock <= 0) {
      alert('This item is out of stock!'); // This uses an alert, but you can handle this more gracefully in your UI
      return; // Exit the function to prevent adding out-of-stock items to the cart
    }
  
    // If there's stock, decrease the stock of the added product
    const newProducts = products.map(product =>
      product.name === productToAdd.name ? { ...product, instock: product.instock - 1 } : product
    );
    setProducts(newProducts);
  
    if (productInCart) {
      // If it exists, update the quantity in the cart
      setCartItems(cartItems.map(item =>
        item.name === productToAdd.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };
  

  const handleRemoveFromCart = (productToRemove) => {
    const exist = cartItems.find((item) => item.id === productToRemove.id);
    if (exist.quantity > 1) {
      setCartItems(cartItems.map((item) =>
        item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
    }

    const newProducts = products.map((product) =>
      product.id === productToRemove.id ? { ...product, instock: product.instock + 1 } : product
    );
    setProducts(newProducts);
  };

  const onCheckout = () => {
    // Optionally, you could implement functionality to reset product stock if necessary
    setCartItems([]); // Clears the cart
    // You could also display a message confirming checkout or redirect the user as needed
  };

  const restockProducts = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      const fetchedProducts = result.data.map(item => ({
        id: item.id,
        name: item.attributes.name,
        cost: item.attributes.cost,
        instock: item.attributes.instock
      }));
  
      // Update the state with fetched products, adding to the existing stock
      setProducts(currentProducts => {
        const updatedProducts = currentProducts.map(product => {
          const fetchedProduct = fetchedProducts.find(p => p.name === product.name);
          return fetchedProduct
            ? {
                ...product,
                instock: product.instock + fetchedProduct.instock // Add fetched stock to existing stock
              }
            : product;
        });
        return updatedProducts;
      });
    } catch (error) {
      console.error("Failed to fetch and restock products:", error);
    }
  };
  

  return (
    <div className="App">
      <h1>Shopping Cart Application</h1>
      <div className="main-layout">
        <Products products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        <Checkout cartItems={cartItems} onCheckout={onCheckout} />
        <Restock onRestock={restockProducts} /> {/* Add this line */}
      </div>
    </div>
  );
}
  

export default App;
