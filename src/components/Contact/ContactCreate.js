import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import messages from '../AutoDismissAlert/messages'
import ContactForm from '../Contact/ContactForm'

import { createContact } from '../../api/contact'

const ContactCreate = props => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    organizationName: '',
    emailAddress: '',
    phoneNumber: '',
    streetAddress: '',
    latitude: '',
    longitude: '',
    note: ''
  })
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
        heading: 'Create fail',
        message: 'failed to create',
        variant: 'danger'
      }))
  }

  if (createdContactId) {
    return <Redirect to={'/contacts'} />
  }

  return (
    <div>
      <h3>add new contact</h3>
      <p>* Fields required</p> <br />

      <p>GeoCoding is not yet available on Contaxt. In the meantime, try adding these coordinates:</p>
      New York: 40.7128, -74.0060 <br />
      Boston: 42.3601, -71.0589 <br />
      New Orleans: 29.9511, -90.07015 <br />
      Miami: 25.7617, -80.1918 <br /> <br />
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
