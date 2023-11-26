import { Button, Container, Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../components/LogIn/UserDetails";

function AuthButton(){
  
    // const {user, setUser } = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem("user"));

    const logOut = () => {
        localStorage.clear();
        console.log("logout");
    }

    if (user && user.name) {
      return(
        <>
        <Nav.Link href="/">
            <Button 
                variant="info"
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
              <Button variant="info">
              Log In
              </Button>
          </Nav.Link>
        </>)
        
    }
  };

export default AuthButton;