import React, { useState, useEffect, Fragment } from 'react'
import ContactCard from './ContactCard'
const Contacts = (props) => {
  const [contacts, setContacts] = useState(null)
  const { user, msgAlert } = props
  useEffect(() => {
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

const contactsIndex = contacts.map(contact =>
    <ContactCard
      key={contact.name}
      item={contact}
    />
  )
}

export default Contacts
