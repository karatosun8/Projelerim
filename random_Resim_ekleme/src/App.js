import { useState } from "react";
import Resim from "./Resim";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Random Resim secme kodu
function getRandomResim() {
  const resimArray = [
    "Angular",
    "Bootstrap",
    "Developer",
    "Js",
    "Developer",
    "Java",
    "Php",
  ];
  return resimArray[Math.floor(Math.random() * resimArray.length)];

  //Math.random sıfırla bir arası rasgele sayı seçer
}

function App() {
  const [resims, setResim] = useState([]);
  const handleClick = () => {
    setResim([...resims, getRandomResim()]); //Daha önceki resimler silinmeden eklenmesini istiyorsak ...resim i array içine eklemeliyiz.aksi halde önceki kursları göremeyiz
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Random Resim Ekleme</button>
      <div>
        <Container xs={1} sm={2} md={3} lg={4}>
          <Row >
            {resims.map((resim, index) => {
              return <Resim key={index} resimName={resim} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
