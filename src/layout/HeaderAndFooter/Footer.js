import { Button, Container, Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../../components/LogIn/UserDetails";
import { useContext } from "react";
import AuthButton from "./AuthButton";

export default function Footer() {
  
    const user_storage = JSON.parse(localStorage.getItem("user"));

    return (
        <>
        
        </>
    )
}