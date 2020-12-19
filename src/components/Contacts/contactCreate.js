import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import messages from '../AutoDismissAlert/messages'
import ContactForm from './contactForm'

import { createContact } from '../../api/contact.js'

const ContactCreate = props => {
  const [contact, setContact] = useState({ firstName: '', lastName: '', latitude: undefined, longitude: undefined })
  const [createdContactId, setCreatedContactId] = useState(null)

  const { user, match } = props

  const handleChange = event => {
    event.persist()
    setContact(prevContact => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedContact = Object.assign({}, prevContact, updatedField)

      return editedContact
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = props

    createContact(user, contact)
      .then(res => setCreatedContactId(res.data.contact._id))
      .then(() => msgAlert({
        heading: 'Create Success',
        message: messages.createSuccess,
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Create Fail',
        message: 'Failed to create',
        variant: 'danger'
      }))
  }

  if (createdContactId) {
    return <Redirect to={`/contacts/${createdContactId}`} />
  }

  return (
    <div className="contact-form">
      <h3>Add New Contact</h3>
      <ContactForm
        contact={contact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        match={match}
        user={user}
      />
    </div>
  )
}

export default ContactCreate
