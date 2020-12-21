// import React, { Component, Fragment } from 'react'
import React from 'react'
import { Route, Link } from 'react-router-dom'
import ContactIndex from './components/Contact/ContactIndex'
import ContactMap from './../src/components/Contact/ContactMap'
import ContactCreate from './../src/components/Contact/ContactCreate'
import Header from './../src/components/Header/Header'

function App () {
  return <div>
    <Header />
    <Link to="/contacts">Contacts</Link>
    <Link to="/contact-create">+</Link>
    <Route path="/contacts" component={ContactIndex}/>
    <Route path="/contact-create" component={ContactCreate}/>
    <ContactMap />
  </div>
}
export default App
