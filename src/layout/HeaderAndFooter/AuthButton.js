import { Button, Container, Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../components/LogIn/UserDetails";

function AuthButton(){
  
    const {user, setUser } = useContext(UserContext);

    const logOut = () => {
        setUser(null)
    }

    if (user.name) {
      return(
        <>
        <Nav.Link href="/">
            <Button 
                variant="primary"
                onClick={logOut}
                >
            Log Out
            </Button>
        </Nav.Link>)
        </>)
        
    } else {
      return( 
        <>
          <Nav.Link href="/login">
              <Button variant="primary">
              Log In
              </Button>
          </Nav.Link>)
        </>)
        
    }
  };

export default AuthButton;