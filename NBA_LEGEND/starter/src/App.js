import Container from "react-bootstrap/esm/Container";
import Header from "./components/Header"
import ContainerCards from "./components/ContainerCards";


function App() {
  return (
    <Container className='text-center mt-5'>
      <Header/>
      <ContainerCards/>
    </Container>
  );
}

export default App;
