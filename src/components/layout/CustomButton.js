import React from 'react';

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

const CustomButton = ({ text }) => {
  const buttonText = text;
  return (
    <button className="custombutton btn" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
