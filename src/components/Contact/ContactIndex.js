import React, { useState, useEffect, Fragment } from 'react'
import ContactCard from './../Card/ContactCard'

import { indexContacts } from './../../api/contact'

const ContactIndex = (props) => {
  const [contacts, setContacts, setMap] = useState(null)
  const { user, msgAlert } = props
  useEffect(() => {
    indexContacts(user)
      .then(res => setContacts(res.data.contacts))
      .then(console.log('props is' + props))
      .then(res => setMap(res.data.contacts))
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
  return (
    <Fragment>
      <div>
        <h4>your contacts</h4>
        {contactIndex}
      </div>
    </Fragment>
  )
}

export default ContactIndex
