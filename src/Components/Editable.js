import React from "react";

export default function Editable({ editdata, setEditdata, handleEditSave, handleEditCancel }) {

  const handleEdit = (e) => {
    const inputNmae = e.target.getAttribute("name");
    const inputValue = e.target.value;
    const editData = { ...editdata };
    editData[inputNmae] = inputValue;
    setEditdata(editData);
  };
  return (
    <tr>
      <td>  
     <input
        type="text"
        name="fullName"
        value={editdata.fullName}
        placeholder="enter your name"
        onChange={handleEdit}
      />
      </td>
      <td>
      <input
        type="text"
        name="address"
        value={editdata.address}
        placeholder="enter your address"
        onChange={handleEdit}
      />
      </td>
      <td>
      <input
        type="number"
        name="phoneNumber"
        value={editdata.phoneNumber}
        placeholder="enter your phonenumber"
        onChange={handleEdit}
      />
      </td>
      
      <td>
      <input
        type="email"
        name="email"
        value={editdata.email}
        placeholder="enter your name"
        onChange={handleEdit}
      />
      </td>
      <td>
      <button onClick={handleEditSave}>save</button>
      <button onClick={handleEditCancel}>cancel</button>
      </td>
     
    </tr>
  );
}

    
 

