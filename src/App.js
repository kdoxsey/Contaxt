// import React, { Component, Fragment } from 'react'
import React from 'react'
import ContactMap from './../src/components/Contact/ContactMap'
import Header from './../src/components/Header/Header'
import ContactCreate from './../src/components/Contact/ContactCreate'

function App () {
  return <div>
    <Header />
    <ContactCreate />
    <ContactMap />
  </div>
}
export default App
