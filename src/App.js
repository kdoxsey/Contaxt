// import React, { Component, Fragment } from 'react'
import React from 'react'
import { Route, Link } from 'react-router-dom'
import ContactIndex from './components/Contact/ContactIndex'
import ContactMap from './../src/components/Contact/ContactMap'
import Header from './../src/components/Header/Header'

function App () {
  return <div>
    <Header />
    <Link to="/contacts">Contacts</Link>
    <Route path="/contacts" component={ContactIndex}/>
    <ContactMap />
  </div>
}
export default App
