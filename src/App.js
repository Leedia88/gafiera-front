import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Agenda from './components/Agenda/Agenda';
import LogInForm from './components/LogIn/LogInForm';
import LogIn from './components/LogIn';
import NewEventForm from './components/NewEventForm';
import NavbarTop from './layout/HeaderAndFooter/NavbarTop';
import HomePage from './layout/HomePage/HomePage';



function App() {

  // const [events, setEvents] = useState(
  //   [
  //  {rowNumber : 1, rowDate : "1st September", rowDescription : "Samba de Gafiera Workshop", rowOrganizer : "Ana Flavia"},
  //  {rowNumber : 2, rowDate : "30th September", rowDescription : "Samba de Gafiera Workshop", rowOrganizer : "Marcelo Chagas"},
  //  {rowNumber : 3, rowDate : "27th October", rowDescription : "Samba de Gafiera Class", rowOrganizer : "Marcelo Chagas"}
  //  ])

  const [user, setUser] = useState(null);

  const [events, setEvents] = useState([])
    useEffect(() => {fetchEvents()}, [])

  const backUrl = "http://localhost:8081/api/events";

  async function fetchEvents(){
    fetch("http://localhost:8081/api/events",
    // {mode: 'no-cors'} 
  //   {method: "GET"
  //   // headers : {
  //   //   'Access-Control-Allow-Origin': '*
  // }
  )
        .then(response =>response.json())
        .then(data => {
            // setEvents(data.message)
            console.log(data);
            setEvents(data)
        })
  }

  const addEvent = (description, organizer, date) => {
    let rowNumber = 0;

    if (events.length > 0){
        rowNumber = events[events.length + 1].rowNumber + 1;
    } else{
        rowNumber = 1;
    }
        const newEvent = {
            rowDescription : description,
            rowDate : date,
            rowOrganizer : organizer
        }
        setEvents(events => [...events, newEvent])
      }
  
  const deleteEvent = (deleteEventRowNumber) => {
        let filtered = events.filter(function(value){
          return value.rowNumber != deleteEventRowNumber;
        });
        setEvents(filtered);
      }

  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>

        <NavbarTop/>

        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route exact path="" element={<HomePage events={events} />} />
            {/* <Route exact path="login" element={<LogInForm/>} /> */}
            <Route 
              exact path="login" 
              element={<LogIn 
                              user={user} 
                              setUser={(user)=>setUser(user)}
                               />} />
                            
            <Route 
              exact path="agenda" 
                element={<Agenda 
                              events={events} 
                              addEvent={addEvent}
                              deleteEvent={deleteEvent}/>} />
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
