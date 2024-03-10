import React from 'react';

const Restock = ({ onRestock }) => {
  return (
    <div className="restock">
      <button onClick={onRestock}>Restock Products</button>
    </div>
  );
};

export default Restock;
