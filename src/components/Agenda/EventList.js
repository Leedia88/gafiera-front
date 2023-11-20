import React, {useContext, useEffect, useState} from "react";
import EventCard from "./EventCard";
import EventRowItem from "./EventRowItem";
import Stack from 'react-bootstrap/Stack';
import { UserContext } from "../LogIn/UserDetails";
import { Col, Container, Row } from "react-bootstrap";

export default function EventList(props){

    console.log(props);

    return(
        <div className="agenda">
        
            <Container>
                {/* <Stack class="row" direction="horizontal" gap={3}> */}
                <Row xs={1}   md={2} xl={3} xxl={4}>
                    {props.events.map(event => (
                                    <Col>
                                        <EventCard 
                                        key={event.id}
                                        event={event}
                                        />
                                    </Col>
                                    
                                ))}
                </Row>
                    
                {/* </Stack> */}
            </Container>
            
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
            </div>
        </div>
    )

}