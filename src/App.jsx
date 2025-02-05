import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Label from './components/Label'
import Button from './components/Add'
import Experience from './components/Experience'

function App() {
  const [inputs, setInputs] = useState([]); // Stores dynamically added inputs
  const [inputValues, setInputValues] = useState({ h: "", n: "" }); // Store input values

  // Function to add a new input
  const addInputField = () => {
    const newId = `input-${inputs.length + 1}`; // Generate a unique ID
    setInputs([...inputs, { id: newId, label: `Label ${inputs.length + 1}` }]);
    setInputValues(prev => ({ ...prev, [newId]: "" })); // Add empty value for new input
  };

  // Function to handle input value change
  const handleInputChange = (id, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [id]: value, // Update only the specific input's value
    }));
  };

  return (
    <>
      {/* Hardcoded Inputs */}
      <Label text="hello" id="h" />
      <Input type="text" id="h" inputValue={inputValues["h"]} setInputValue={handleInputChange} />

      <Label text="name" id="n" />
      <Input type="text" id="n" inputValue={inputValues["n"]} setInputValue={handleInputChange} />

      {/* Dynamically Added Inputs */}
      {inputs.map((input) => (
        <div key={input.id}>
          <Label text={input.label} id={input.id} />
          <Input type="text" id={input.id} inputValue={inputValues[input.id] || ""} setInputValue={handleInputChange} />
        </div>
      ))}

      {/* Display Values */}
      <p>First Input: {inputValues["h"]}</p>
      <p>Second Input: {inputValues["n"]}</p>

      {/* Button to Add New Input */}
      <Button onClick={addInputField} text="Add Input" />
      <Experience id={"experience1"} inputValue="" setInputValue={handleInputChange} />
    </>
  );
}

export default App;