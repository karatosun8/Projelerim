import React from "react";
import data from "../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Pictures = () => {
  return (
    <Container>
      
      <Row>
        <Col xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      

      
    </Container>
  );
};

export default Pictures;


// {data.map((item, index) => (
//     <Col xs={6} s={4} md={3} lg={3} key={index}>
//       <img
//         src={item.src.large}
//         width={"200px"}
//         className="img-thumbnail"
//       />
//       <p>Photographer: {item.photographer}</p>
//     </Col>
//   ))}