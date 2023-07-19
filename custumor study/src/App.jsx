import "./App.css"
import CustomerForm from "./component/customerForm/CustomerForm"
import CustomerList from "./component/customerList/CustomerList"
import { useState } from "react"

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    // setCustomers([...customers, newCustomer]);
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };
  return (
    <div className="App">
       <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  )
}

export default App
