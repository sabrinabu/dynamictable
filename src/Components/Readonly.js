import React from "react";
import "../App.css";

export default function Readonly({contact, handleEditFinal, handleDelet}) {
   
  return (
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
       <td>
        <button type="button" onClick={(e)=>handleEditFinal(e,contact)}>Edit</button>
        <button type="button" onClick={()=>handleDelet(contact.id)}>Remove</button>
       </td>
      </tr>
    
  );
}
