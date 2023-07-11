import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from "../assets/nba-logo.png"

const Header =()=>{

    return(
        <Container >
            <Image src={logo} width="200px"/>
            <h1 className='my-2'>NBA LEGENDS</h1>
        </Container>
    )
}

export default Header;