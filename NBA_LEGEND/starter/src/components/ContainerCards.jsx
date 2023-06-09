import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const ContainerCards = () => {
  console.log(data);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(filteredData);
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Player..."
        onChange={handleChange}
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row xs={2} md={4} lg={6} className="justify-content-center g-3">
          
          {/* aşağıdaki şekilde olabilir */}
          {/* {filteredData.map((player, i) => (
            <PlayerCard
              key={i}
              player={player}
              img={player.img}
              name={player.name}
              statistics={player.statistics}
            />
          ))} */}
          {filteredData.map((player, i) => (
            <PlayerCard
              key={i}
            //   objenin içerisindeki tüm veriler lazımsa {...player kullanılır}
              {...player}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default ContainerCards;
