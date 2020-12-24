import React, { useState, useEffect } from 'react'
import ContactForm from '../Contact/ContactForm'
import { Redirect } from 'react-router-dom'

import { updateContact, showContact } from '../../api/contact'

const ContactUpdate = props => {
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
  const [updatedContact, setUpdatedContact] = useState(false)

  const { user, msgAlert, match } = props
  useEffect(() => {
    showContact(user, match.params.contactId)
      .then(res => setContact(res.data.contact))
      .then(() => msgAlert({
        heading: 'Contact show success',
        message: 'check it out',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Task show failed',
        message: err.message,
        variant: 'danger'
      }))
  }, [])

  const handleChange = event => {
    event.persist()
    console.log('handleChange event is ' + event)

    // setContact(oldContact => {
    //   let updatedField
    //   if (event.target.)
    // })
  }

  const handleSubmit = event => {
    console.log('handleSubmit event is ' + event)
    event.preventDefault()
    updateContact(user, contact, match.params.contactId)
      .then(() => setUpdatedContact(true))
      .then(() => msgAlert({
        heading: 'Update succesful',
        message: 'contact updated',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Update failed',
        message: err.message,
        variant: 'danger'
      }))
  }

  if (updatedContact) {
    return <Redirect to={`/contacts/${match.params.id}`} />
  }
  handleChange()
  handleSubmit()
  console.log([updatedContact, setUpdatedContact])
  console.log(contact)
  return (
    <ContactForm
    // contact={contact}
    // handleChange={handleChange}
    // handleSubmit={handleSubmit}
    // match={match}
    // user={user}
    />
  )
}

export default ContactUpdate
