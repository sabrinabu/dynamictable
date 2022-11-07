import { useState } from "react";
import "./App.css";
import datas from "./data.json";
function App() {
  const [contacts, setContacts] = useState(datas);
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
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.fullName}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
