import React, { useState, useEffect } from 'react'
import ContactCard from './../Card/ContactCard'
import ContactMap from './../Contact/ContactMap'

import { indexContacts } from './../../api/contact'

const ContactIndex = (props) => {
  const [contacts, setContacts] = useState(null)
  const { user, msgAlert } = props
  useEffect(() => {
    console.log('contacts is ' + contacts)
    indexContacts(user)
      .then(res => setContacts(res.data.contacts))
      .catch(() => msgAlert({
        heading: 'Index Fail',
        message: 'Failed to index',
        variant: 'danger'
      }))
  }, [])
  if (!contacts) {
    return <p>Loading...</p>
  }
  console.log(props)

  const contactIndex = contacts.map(contact => (
    <ContactCard
      key={contact._id}
      item={contact}
    />
  ))

  return (
    <div
      className="mapIndexComponent"
    >
      <div className = "contactIndex" user ={user} token={user.token}>
        {contactIndex}
      </div>
      <ContactMap
        className="contactMap"
        contacts={contacts}
      />
    </div>
  )
}

export default ContactIndex
