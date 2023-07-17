import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayerCard from "./PlayerCard";
import {data} from "../helpers/data"
import { useState } from "react";

const ContainerCard = () => {

  const [search,setSearch] =useState("")
  const handleChange =(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  //search kısında yazılan name i filtreler
  const filterData = data.filter(item=>item.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
console.log(filterData);

  return (
    <>
      <Form.Control 
      type="search" 
      placeholder="Search Player..."
      onChange={handleChange}
       />
      <Container className="card-container my-3 rounded-2">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-3">

          {/* //data daki bilgileri filtreler ve playerCard a gönderirir */}
{filterData.map((player,i)=>(
  <PlayerCard key={i} {...player}/>
))}

      
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
