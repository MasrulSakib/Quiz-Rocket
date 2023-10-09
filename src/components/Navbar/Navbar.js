import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-black">
            <Container className='mx-auto'>
                <Navbar.Brand href="#home" className='text-danger fw-semibold'>Quiz Rocket</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                    <Nav >
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-light">About</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;