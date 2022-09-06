import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/listings">Listings</Nav.Link>
            <Nav.Link href="/bookings">Bookings</Nav.Link>
            <Nav.Link href="/newreleases">New Releases</Nav.Link>
            <Nav.Link href="/discussion">Discussion</Nav.Link>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item href="/screens">Screens</NavDropdown.Item>
              <NavDropdown.Item href="/classifications">Classifications</NavDropdown.Item>
              <NavDropdown.Item href="/placestogo">Places To Go</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/directions">Directions</NavDropdown.Item>
              <NavDropdown.Item href="/openingtimes">Opening Times</NavDropdown.Item>
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
export default Navigation;


