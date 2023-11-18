import { Button, Container, Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../components/LogIn/UserDetails";
import { useContext } from "react";

export default function NavbarTop() {

    const {user, setUser } = useContext(UserContext);
    // function userName(){
    //   return user !== null ? `${user.name} ${user.lastName}` : "" ;
    // }

    return (
        <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Samba da Gafiera</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* <Nav.Link href="/home">Home</Nav.Link> */}
                  <Nav.Link href="/agenda">Agenda</Nav.Link>
                  <NavDropdown title="My Space" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">My Events</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">My Contacts</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>
                <Nav>
                {user !== null ? `${user.name} ${user.lastName}` : "" }
                  <Nav.Link href="/login">
                    <Button variant="primary">
                        Log In
                      </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
       
    )
}