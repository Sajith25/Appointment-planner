import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  // State variables
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Callback function to add a new contact
  const addContact = (name, phone, email) => {
    setContacts(prevContacts => [...prevContacts, { name, phone, email }]);
  };

  // Callback function to add a new appointment
  const addAppointment = (title, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, { title, contact, date, time }]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/>}/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>}/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
