import React from "react";

function InputForm(props) {

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const data = {name, value};

    
    props.handleChange(data);
  }

  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="border-slate-300 border rounded-md h-16 flex items-center p-4 text-xl font-light text-stone-400">
        <input 
          type="text"
          name={props.fields} 
          placeholder={props.fields} 
          className="focus:outline-none"
          onChange={handleInputChange}
          />
      </div>
    </div>
  )
}

export default InputForm;