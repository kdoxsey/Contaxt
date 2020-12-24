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
  const [updatedContact, seUpdatedContact] = useState(false)

  const { user, msgAlert, match } = props
  useEffect(() => {
    showContact(user, match.params.contactId)
      .then(() => msgAlert({
        heading: 'Contact show success',
        message: err.message,
        variant: 'danger'
      }))
  }, [])

  const handleChange = event => {
    event.persist
    console.log(event)
  }
}
