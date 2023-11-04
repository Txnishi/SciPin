import React from 'react';

const Pin = ({ title, imageUrl }) => {
  return (
    <>
        <div className="pin" >
          <a href="https://www.sciencedirect.com/science/article/abs/pii/S0263224119311212">
            <img src={imageUrl} alt={title} />
            <p>{title}</p>
          </a>
        </div>
    </>
    
  );
};

export default Pin;