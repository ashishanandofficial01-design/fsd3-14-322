import React from 'react';

const MyButton = ({ onClick, height, width }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ height: height, width: width }}
    >
      Click Me
    </button>
  );
};

const Event = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <MyButton onClick={handleClick} height="50px" width="150px" />
    </div>
  );
};

export default Event;
