import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="mt-5 mt-lg-0">
      <div className="card border shadow-none">
        <div className="card-header bg-transparent border-bottom py-3 px-4">
          <h5 className="font-size-16 mb-0">Your Cart</h5>
        </div>
        <div className="card-body p-4 pt-2">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="d-flex align-items-start border-bottom pb-3">
                <div className="me-4">
                  <img src={item.imageUrl || 'https://via.placeholder.com/50'} alt={item.name} className="avatar-lg rounded" />
                </div>
                <div className="flex-grow-1 align-self-center overflow-hidden">
                  <h5 className="text-truncate font-size-18">{item.name}</h5>
                  <p className="mb-0 mt-1">Quantity: <span className="fw-medium">{item.quantity}</span></p>
                </div>
                <div className="flex-shrink-0 ms-2">
                  <ul className="list-inline mb-0 font-size-16">
                    <li className="list-inline-item">
                      <button 
                        onClick={() => onRemoveFromCart(item)}
                        style={{
                          cursor: 'pointer',
                          color: 'white',
                          backgroundColor: 'red',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '5px 10px',
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;


