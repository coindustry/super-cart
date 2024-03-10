import React from 'react';

const Checkout = ({ cartItems, onCheckout }) => {
  // Calculate the total cost
  const totalCost = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

  return (
    <div className="mt-5 mt-lg-0">
      <div className="card border shadow-none">
        <div className="card-header bg-transparent border-bottom py-3 px-4">
          <h5 className="font-size-16 mb-0">Checkout Summary</h5>
        </div>
        <div className="card-body p-4 pt-2">
          {cartItems.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
              <span className="text-truncate font-size-18">{item.name} - {item.quantity} x ${item.cost}</span>
              <span className="font-size-18 fw-bold">${item.cost * item.quantity}</span>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center pt-3">
            <h5>Total:</h5>
            <h5 className="font-size-18 fw-bold">${totalCost.toFixed(2)}</h5>
          </div>
          <button 
            onClick={onCheckout}
            style={{
              cursor: 'pointer',
              color: 'white',
              backgroundColor: '#007bff', // Match this to your application's primary color or checkout button color
              border: 'none',
              borderRadius: '4px',
              padding: '10px 20px',
              marginTop: '20px',
              width: '100%' // Ensures the button stretches to fill the container
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

