import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import ContactForm from './ContactForm'

import { createContact } from '../../api/contact'

const ContactCreate = props => {
  const [contact, setContact] = useState({ firstName: '', lastName: '', latitude: '', longitude: '' })
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

    createContact(user, contact)
      .then(res => setCreatedContactId(res.data.contact._id))
      .then(() => console.log('success'))
      .catch(() => console.log('failed'))
  }

  if (createdContactId) {
    return <Redirect to={'/'} />
  }

  return (
    <ContactForm
      contact={contact}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      match={match}
      user={user}
    />
  )
}

export default ContactCreate
