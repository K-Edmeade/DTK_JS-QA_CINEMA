import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

function Footer() {
    return (
        <Navbar fixed="bottom">
            <Nav style={{marginTop: '5px'}}  className="justify-content-center" >
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Footer;