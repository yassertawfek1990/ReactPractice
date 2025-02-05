import React from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Add'
import { useState } from 'react'

const Experience = ({id,inputValue,setInputValue}) => {
    const [inputs, setInputs] = useState([{ id: "experience-1", label: `task 1` }]); // Stores dynamically added inputs
    //   const [inputValues, setInputValues] = useState({ h: "", n: "" }); // Store input values
    
      // Function to add a new input
      const addInputField = () => {
        const newId = `experience-${inputs.length + 1}`; // Generate a unique ID
        setInputs([...inputs, { id: newId, label: `task ${inputs.length + 1}` }]);
        // setInputValues(prev => ({ ...prev, [newId]: "" })); // Add empty value for new input
      };
    
  return (
    <div className='experience'>
        <label htmlFor={`Job title +${id}`}>Job title</label>
        <Input id = {`Job title +${id}`} type= "text" inputValue={inputValue} setInputValue={setInputValue}/>
        <label htmlFor={`Company name +${id}`}>Company name</label>
        <Input id = {`Company name +${id}`} type= "text" inputValue={inputValue} setInputValue={setInputValue}/>
        <label htmlFor={`Company name +${id}`}>Company name</label>
        <Input id = {`Company name +${id}`} type= "text" inputValue={inputValue} setInputValue={setInputValue}/>
        <label htmlFor={`From +${id}`}>From</label>
        <Input id = {`From +${id}`} type= "date" inputValue={inputValue} setInputValue={setInputValue}/>
        <label htmlFor={`Until +${id}`}>Until</label>
        <Input id = {`Until +${id}`} type= "date" inputValue={inputValue} setInputValue={setInputValue}/>
        <label htmlFor={`Location +${id}`}>Location</label>
        <Input id = {`Location +${id}`} type= "text" inputValue={inputValue} setInputValue={setInputValue}/>
        <label htmlFor={`About +${id}`}>a Word about the company</label>
        <Input id = {`About +${id}`} type= "text" inputValue={inputValue} setInputValue={setInputValue}/>
        <ul>
        {inputs.map((input) => (
        <div key={input.id}>
          <Label text={input.label} id={input.id} />
          <Input type="text" id={input.id} inputValue="" setInputValue={setInputValue} />
        </div>))}
        </ul>
        <Button onClick={addInputField} text="Add New Task" />
    </div>
  )
}

export default Experience
