import React, { useState, useEffect, Fragment } from 'react'
import ContactCard from './../Card/ContactCard'
import ContactMap from './../Contact/ContactMap'

import { indexContacts } from './../../api/contact'

const ContactIndex = (props) => {
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

  const contactIndex = contacts.map(contact => (
    <ContactCard
      key={contact._id}
      item={contact}
    />
  ))

  console.log(contacts)
  return (
    <Fragment>
      <div>
        <h4>your contacts</h4>
        <ContactMap
          contacts={contacts}
        />
        {contactIndex}
      </div>
    </Fragment>
  )
}

export default ContactIndex
