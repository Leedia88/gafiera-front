import React, {useContext, useEffect, useState} from "react";
import Stack from 'react-bootstrap/Stack';
import { UserContext } from "../LogIn/UserDetails";
import EventList from "./EventList";
import { Container, Row } from "react-bootstrap";

export default function Agenda(props){
    console.log(props);
    const {user, setUser} = useContext(UserContext)


    // const [events, setEvents] = useState(null)
    // useEffect(() => {fetchEvents()}, [])

    const [events, setEvents] = useState(null)
    useEffect(() => {fetchEvents()}, [])

    async function fetchEvents(){
        fetch("http://localhost:8081/api/events",
        // {mode: 'no-cors'} 
      //   {method: "GET",
      //   headers : {
      //     'Access-Control-Allow-Origin': '*'
      //     }
      // }
      )
            .then(response =>response.json())
            .then(data => {
                // setEvents(data.message)
                console.log(data);
                setEvents(data)
            })
      }

    return(
        <>
            <Container>
                <Row className="mt-2 align-items-center">
                    <h2> {user.name ? `Hello ${user.name} !` : "Welcome"}</h2>
                </Row>
            </Container>
            
            <Row className="mt-3">
                {events && <EventList events={events}/>}
            </Row>
         
             
        </>
    )
}