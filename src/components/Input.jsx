import React from 'react'

const Input = ({ type, id, inputValue, setInputValue }) => {
    return (
      <input
        type={type}
        id={id}
        value={inputValue}
        onChange={(event) => setInputValue(id, event.target.value)} // Pass the id to update the correct state
      />
    );
  };
  

export default Input
