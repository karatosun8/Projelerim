import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./App.css"

function App() {

const [newItem,setNewItem] = useState("")
const [items,setItems]=useState([])

function addItem (){
if(!newItem){
  alert ("enter an item")
  return;
}

  const items = {
    id: Math.floor(Math.random()*1000),
    value: newItem
  }
  setItems (oldItems => [...oldItems,items])
  setNewItem("")

}
function deleteItem(id){
  const newArray =items.filter(item => item.id !== id);
  setItems(newArray);


}
  return (
    <div className="App">
      <h1 className="text-center">Reract Todo List</h1>
      <InputGroup className="mb-3">
        <Form.Control
          type='text'
          placeholder="Add an Item..."
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          
        />
        <Button variant="secondary" onClick={()=>addItem()}>
          Button
        </Button>
      </InputGroup>
      <ul>
        {items.map(item =>{
          return(
            
            <li className='text-start p-1' key={item.id}>{item.value} 
            <Button variant="danger" onClick={()=>deleteItem(item.id)} className='text-end  m-1 '>
          Sil
        </Button></li>
        
      
          )
        })}
      </ul>
    </div>
  )
}

export default App
