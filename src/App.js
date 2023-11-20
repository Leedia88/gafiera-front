import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Agenda from './components/Agenda/Agenda';
import LogIn from './components/LogIn/LogIn';
import NavbarTop from './layout/HeaderAndFooter/NavbarTop';
import HomePage from './layout/HomePage/HomePage';
import { UserContext, UserProvider } from './components/LogIn/UserDetails';
import MyEvents from './components/mySpace/MyEvents';



function App() {

  // const [events, setEvents] = useState(
  //   [
  //     {
  //         "id": 1, "title": "Concert Gafiera Live","description": "Description 1.","date": "2023-09-06","duration": null,"category": {"id": 1,"name": "Class"},"owner": {"id": 1,"name": "Chagas","lastName": "Marcelo","email": "mc@g.com","password": "azerty" }, "participants": []
  //     },
        // { "id": 2, "title": "Concert Gafiera Live", "description": "Description 2.", "date": "2023-12-16", "duration": null, "category": {     "id": 1,     "name": "Class" }, "owner": {     "id": 1,     "name": "Chagas",     "lastName": "Marcelo",     "email": "mc@g.com",     "password": "azerty" }, "participants": []
  //     },
  //     { "id": 3, "title": "Concert Gafiera Live", "description": "Description 3", "date": "2023-06-16", "duration": null, "category": {     "id": 1,     "name": "Class" }, "owner": {     "id": 1,     "name": "Chagas",     "lastName": "Marcelo",     "email": "mc@g.com",     "password": "azerty" }, "participants": []
  //     },
  //     { "id": 4, "title": "Concert Gafiera Live", "description": "Description 4", "date": "2023-10-06", "duration": null, "category": {     "id": 1,     "name": "Class" }, "owner": {     "id": 1,     "name": "Chagas",     "lastName": "Marcelo",     "email": "mc@g.com",     "password": "azerty" }, "participants": []
  //     },
  //     { "id": 5, "title": "Concert Gafiera Live", "description": "Description 5", "date": "2023-11-16", "duration": null, "category": {     "id": 1,     "name": "Class" },"owner": {     "id": 1,     "name": "Chagas",     "lastName": "Marcelo",     "email": "mc@g.com",     "password": "azerty" }, "participants": []
  //     }
  // ]
  //  )

  const [user, setUser] = useState([]);

  // const [events, setEvents] = useState(null)
  //   useEffect(() => {fetchEvents()}, [])

  const isConnected = user !== null;
  
  const backUrl = "http://localhost:8081/api/events";

  // async function fetchEvents(){
  //   fetch("http://localhost:8081/api/events",
  //   // {mode: 'no-cors'} 
  // //   {method: "GET",
  // //   headers : {
  // //     'Access-Control-Allow-Origin': '*'
  // //     }
  // // }
  // )
  //       .then(response =>response.json())
  //       .then(data => {
  //           // setEvents(data.message)
  //           console.log(data);
  //           setEvents(data)
  //       })
  // }


  //   if (events.length > 0){
  //       rowNumber = events[events.length + 1].rowNumber + 1;
  //   } else{
  //       rowNumber = 1;
  //   }
  //       const newEvent = {
  //           rowDescription : description,
  //           rowDate : date,
  //           rowOrganizer : organizer
  //       }
  //       setEvents(events => [...events, newEvent])
  //     }
  
  // const deleteEvent = (deleteEventRowNumber) => {
  //       let filtered = events.filter(function(value){
  //         return value.rowNumber != deleteEventRowNumber;
  //       });
  //       setEvents(filtered);
  //     }

  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <UserContext.Provider value={{user,setUser}}>
            <NavbarTop/>

            <Routes>
                <Route index element={<HomePage/>} />
                {/* <Route exact path="" element={<HomePage events={events} />} /> */}
                <Route 
                  exact path="login" 
                  element={<LogIn 
                                  // user={user}
                                  // fetchUser={(email,password)=>fetchUser(email,password)}
                                  // setUser={(user)=>setUser(user)}
                                  />} />
                {/* <Route 
                  exact path="register" 
                  element={<Register 
                                  user={user} 
                                  setUser={(user)=>setUser(user)}
                                  />} />            */}
                <Route 
                  exact path="agenda" 
                    element={<Agenda 
                                  // events={events} 
                                  // setEvents={setEvents}
                                  // addEvent={addEvent}
                                  // deleteEvent={deleteEvent}
                                  />}
                                   />
                <Route 
                  exact path="my-events" 
                    element={<MyEvents/>}
                                   />
            </Routes>
          </UserContext.Provider>
        
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
