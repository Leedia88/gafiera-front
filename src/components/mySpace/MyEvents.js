import React, { useContext } from "react";
import { useState, useEffect } from "react";
import NewEventForm from "./NewEventForm";
import EventRowItem from "../Agenda/EventRowItem";
import Stack from 'react-bootstrap/Stack';
import { UserContext } from "../LogIn/UserDetails";
import { Container, Row } from "react-bootstrap";

export default function MyEvents(props){

    // const {user, setUser} = useContext(UserContext)
    const user = JSON.parse(localStorage.getItem("user"));

    // const back_url = "http://34.155.67.24:8081/"
    const back_url = "http://localhost:8081/"

    const [showAddForm, setShowAddForm] = useState(false);

    const [error, setError] = useState(null);

    const [events, setEvents] = useState(null)
    useEffect(() => {fetchEvents()}, [])

    const addEvent = (description, organizer, date) => {
        let rowNumber = 0;}

        async function fetchEvents(){
            fetch(`${back_url}api/users/${user.id}/events`)
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
            <div className="mt-5 container">

                {events &&
                <div className="card">
                <div className="card-header">
                My Next Events
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Organizer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events?.map(event => (
                                <EventRowItem 
                                    key={event.id}
                                    rowNumber={event.id}
                                    rowDate={event.date}
                                    rowDescription={event.description}
                                    rowOrganizer={event.owner.name + " " + event.owner.lastName}
                                    deleteEvent={props.deleteEvent}
                                />
                            )) }
                        </tbody>
                    </table>
                    
                </div>
            
            </div>
                }
                
            </div>

            <div className="mt-5 container">
                <button
                    className="btn btn-primary"
                    onClick={() => setShowAddForm(!showAddForm)}>
                        {showAddForm ? "Close Add Event" : "Show Add Event"}
                </button>
            </div>
            <div>
            {showAddForm &&
                        <NewEventForm addEvent={addEvent}/>
                    }
            </div>      
        </>
    )
}