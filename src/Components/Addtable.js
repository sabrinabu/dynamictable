import React, { useState } from "react";
import "../App.css";
export default function Addtable({contacts, setContacts}) {
  const [addForm, setAddForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddForm = (e) => {
    e.preventDefault();
    const inputName = e.target.getAttribute("name");
    const inputValue = e.target.value;
    const newFormData = { ...addForm };
    newFormData[inputName] = inputValue;
    setAddForm(newFormData);
  };

  const handleAdd=(e)=>{
    e.preventDefault();
    const values={
        fullName:addForm.fullName,
        address:addForm.address,
        phoneNumber:addForm.phoneNumber,
        email:addForm.email
    }
    const newValues=[...contacts, values];
    console.log(newValues)
    setContacts(newValues);
  }
  return (
    <form onSubmit={handleAdd}>
      <h2 className="text">Add new table</h2>

      <input
        type="text"
        name="fullName"
        placeholder="enter your name"
        onChange={handleAddForm}
      />
      <input
        type="text"
        name="address"
        placeholder="enter your address"
        onChange={handleAddForm}
      />
      <input
        type="number"
        name="phoneNumber"
        placeholder="enter your phonenumber"
        onChange={handleAddForm}
      />
      <input
        type="email"
        name="email"
        placeholder="enter your name"
        onChange={handleAddForm}
      />
      <button type="submit">Add</button>
    </form>
  );
}
