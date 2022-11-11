import { Fragment, useState } from "react";
import "./App.css";
import Addtable from "./Components/Addtable";
import Editable from "./Components/Editable";
import Readonly from "./Components/Readonly";
import datas from "./data.json";
function App() {
  const [contacts, setContacts] = useState(datas);

  const [editId, setEditId] = useState(null);

  const [editdata, setEditdata] = useState({
    fullName: "", 
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleEditFinal = (event, contact) => {
    event.preventDefault();
    setEditId(contact.id);
    const values = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditdata(values);

    console.log(editdata);
  };

  const handleEditSave = () => {
    const editValues = {
      fullName: editdata.fullName,
      address: editdata.address,
      phoneNumber: editdata.phoneNumber,
      email: editdata.email,
    };
    const edidtSave = [...contacts];
    const index = edidtSave.findIndex((x) => x.id === editId);
    edidtSave[index] = editValues;
    setContacts(edidtSave);
    setEditId(null);
  };

  const handleEditCancel = () => {
    setEditId(null);
  };

  const handleDelet = (id) => {
    console.log(id);
    const newcontacts = [...contacts];
    const index = contacts.findIndex((x) => x.id === id);
    newcontacts.splice(index, 1);
    setContacts(newcontacts);
  };

  return (
    <div className="appcontainer">
      <form>
        <table>
          <thead>
            <tr>
              <td>FullName</td>
              <td>Address</td>
              <td>PhoneNumber</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {contact.id === editId ? (
                  <Editable
                    editdata={editdata}
                    setEditdata={setEditdata}
                    handleEditSave={handleEditSave}
                    handleEditCancel={handleEditCancel}
                  />
                ) : (
                  <Readonly
                    contact={contact}
                    handleEditFinal={handleEditFinal}
                    handleDelet={handleDelet}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <Addtable contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
