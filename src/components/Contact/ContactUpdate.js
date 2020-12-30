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

  const { msgAlert, match, user } = props
  useEffect(() => {
    showContact(props.user, props.match.params.contactId)
      .then(res => setContact(res.data.contact))
      .catch(err => msgAlert({
        heading: 'Task show failed',
        message: err.message,
        variant: 'danger'
      }))
  }, [])

  const handleChange = event => {
    event.persist()
    console.log('handleChange event is ' + event)
    setContact(prevContact => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedContact = Object.assign({}, prevContact, updatedField)
      return editedContact
    })
  }

  const handleSubmit = event => {
    console.log('handleSubmit event is ' + event)
    event.preventDefault()
    updateContact(props.user, contact, props.match.params.contactId)
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
      .catch(console.error)
  }

  if (updatedContact) {
    return <Redirect to={'/contacts/'} />
  }
  // handleChange()
  // handleSubmit()
  // console.log([updatedContact, setUpdatedContact])
  // console.log(contact)
  return (
    <div>
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

export default ContactUpdate
