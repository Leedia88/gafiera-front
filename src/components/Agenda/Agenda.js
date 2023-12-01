import React, {useContext, useEffect, useState} from "react";
import Stack from 'react-bootstrap/Stack';
import { UserContext } from "../LogIn/UserDetails";
import EventList from "./EventList";
import { Container, Row } from "react-bootstrap";

export default function Agenda(props){

    const user = JSON.parse(localStorage.getItem("user"));

    const back_url = "http://34.155.67.24:8081/"
    // const back_url = "http://localhost:8081/" 

    const [events, setEvents] = useState(null)
    useEffect(() => {fetchEvents()}, [])

    const [error, setError] = useState(null);

    async function fetchEvents(){
        fetch(`${back_url}api/events`)
            .then((response) => {
                if(!response.ok){
                    throw Error("Une erreur est survenue...")
                }
                return response.json();})
            .then(data => {
                setEvents(data)
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
            })
      }

    return(
        <>
            <div>
            <Container>
                <Row className="m-3 align-items-center">
                    <h2> {user && user.name ? `Hello ${user.name} !` : "Welcome !"}</h2>
                </Row>
            </Container>
            
            <Row className="mt-3">
                {events && <EventList events={events}/>}
            </Row>

            <Row className="mt-3">
                {error && <div>{error}</div>}
            </Row>
            </div>
            
        </>
    )
}