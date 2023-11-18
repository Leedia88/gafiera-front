import React, {useContext, useEffect, useState} from "react";
import EventRowItem from "../EventRowItem"
import NewEventForm from "../NewEventForm";
import EventCard from "./EventCard";
import Stack from 'react-bootstrap/Stack';
import { UserContext } from "../LogIn/UserDetails";

export default function Agenda(props){
    console.log(props);
    const {user, setUser} = useContext(UserContext)

    const [showAddForm, setShowAddForm] = useState(false);

    const images= []

    return(
        <>
            <h2> Hello {user.name}</h2>
            <div className="mt-5 container">
                <Stack class="row" direction="horizontal" gap={3}>
                    {props.events.map(event => (
                                    <EventCard 
                                    key={event.id}
                                    title={event.title}
                                    rowNumber={event.id}
                                    rowDate={event.date}
                                    rowDescription={event.description}
                                    rowOrganizer={event.owner.name}
                                    deleteEvent={props.deleteEvent}
                                    />
                                ))}
                </Stack>
                    
            </div>
            
            <div className="mt-5 container">
                <div className="card">
                    <div className="card-header">
                    Next Events
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
                                {props.events.map(event => (
                                    <EventRowItem 
                                        key={event.id}
                                        rowNumber={event.id}
                                        rowDate={event.date}
                                        rowDescription={event.description}
                                        rowOrganizer={event.owner.name + " " + event.owner.lastName}
                                        deleteEvent={props.deleteEvent}
                                    />
                                ))}
                            </tbody>
                        </table>
                        
                    </div>
                
                </div>
                
            <div className="mt-5 container">
                <button
                    className="btn btn-primary"
                    onClick={() => setShowAddForm(!showAddForm)}>
                        {showAddForm ? "Close Add Event" : "Show Add Event"}
                </button>
                </div>
                    {showAddForm &&
                        <NewEventForm addEvent={props.addEvent}/>
                    }
            </div>
        </>
    )
}