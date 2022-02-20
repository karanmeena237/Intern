import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar'
import React, { useState,useEffect } from "react";
import RightForm from './RightForm';
import ContactList from './ContactList';
function App() {
  const LOCAL_KEY = "contacts";
  const [contacts, setContacts]=useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    // always use setcontacts to update the state
    setContacts([...contacts,contact])
  };

  // To render from local storage
  useEffect(()=>{
   const retrived = JSON.parse(localStorage.getItem(LOCAL_KEY));
    // Now we retrieved the data now set state
    if(retrived)
    setContacts(retrived);
  },[]);

//  To add in local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_KEY,JSON.stringify(contacts));
  },[contacts]);


  return (  <Router>
       <header> TsukasaGG </header>
    <div className="App">
    <Switch>
       <Route exact path="/ContactList.js">
         <Sidebar/>
         <ContactList contacts={contacts}/> {/* First contacts is a property and second is array and this can be accessed in the contact list as props */}
         </Route>
         
  <Route exact path="/">
     <Sidebar />
       <RightForm addContactHandler={addContactHandler}/>
       </Route>
     
       </Switch>
   
     </div>
    

     </Router>
  );
}

export default App;

// For using location Storage :- useEffect