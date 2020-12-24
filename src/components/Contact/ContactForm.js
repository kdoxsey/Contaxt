import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = ({ contact, user, handleSubmit, handleChange, match }) => {
  if (match.url === '/contact-update/' + contact._id) {
    return (
      <form onSubmit={handleSubmit}>
        <Form.Group controlId='contact'>
          <Form.Control
            type='text'
            placeholder='First Name'
            value={contact.firstName}
            name="firstName"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Last name'
            value={contact.lastName}
            name="lastName"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Business or Organization Name'
            value={contact.organizationName}
            name="organizationName"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Email Address'
            value={contact.emailAddress}
            name="emailAddress"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Phone Number'
            value={contact.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Address'
            value={contact.streetAddress}
            name="streetAddress"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Latitude'
            value={contact.latitude}
            name="latitude"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Longitude'
            value={contact.longitude}
            name="longitude"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Note'
            value={contact.note}
            name="note"
            onChange={handleChange}
          />

        </Form.Group>
        <Button
          type="submit"
        >
                    Submit
        </Button>
      </form>
    )
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <Form.Group controlId='contact'>
          <Form.Control
            type='text'
            placeholder='First Name'
            value={contact.firstName}
            name="firstName"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Last name'
            value={contact.lastName}
            name="lastName"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Business or Organization Name'
            value={contact.organizationName}
            name="organizationName"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Email Address'
            value={contact.emailAddress}
            name="emailAddress"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Phone Number'
            value={contact.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Address'
            value={contact.streetAddress}
            name="streetAddress"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Latitude'
            value={contact.latitude}
            name="latitude"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Longitude'
            value={contact.longitude}
            name="longitude"
            onChange={handleChange}
          />

          <Form.Control
            type='text'
            placeholder='Note'
            value={contact.note}
            name="note"
            onChange={handleChange}
          />

        </Form.Group>
        <Button
          type="submit"
        >
                    Submit
        </Button>
      </form>
    )
  }
}

export default ContactForm
