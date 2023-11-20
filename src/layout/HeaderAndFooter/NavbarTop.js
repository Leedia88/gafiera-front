import { Button, Container, Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../components/LogIn/UserDetails";
import { useContext } from "react";
import AuthButton from "./AuthButton";

export default function NavbarTop() {

    const {user, setUser } = useContext(UserContext);

    return (
        <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Samba da Gafiera</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* <Nav.Link href="/home">Home</Nav.Link> */}
                  <Nav.Link href="/agenda">Agenda</Nav.Link>
                  {user.name &&
                    <NavDropdown title="My Space" id="basic-nav-dropdown">
                      <NavDropdown.Item href="my-events">My Events</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        My Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">My Contacts</NavDropdown.Item>
                      <NavDropdown.Divider />
                      {/* <NavDropdown.Item href="#action/3.4">
                        Log Out
                      </NavDropdown.Item> */}
                    </NavDropdown>
                  }
                  
                </Nav>
                <Nav>
                  <Nav.Link className="pt-3" href="/">{user && user.name ? `${user.name} ${user.lastName}` : "" }</Nav.Link>
                  {/* <Nav.Link href="/login">
                    <Button variant="primary">
                        Log In
                      </Button>
                  </Nav.Link> */}
                  <AuthButton/>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
       
    )
}