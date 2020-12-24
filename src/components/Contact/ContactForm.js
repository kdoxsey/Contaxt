import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = ({ contact, user, handleSubmit, handleChange, match }) => {
  if (match.url === '/contact-update/' + contact._id) {
    return (
      <form onSubmit={handleSubmit}>
        <Form.Group controlId='contact'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.firstName}
            name="firstName"
            onChange={handleChange}
          />

          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.lastName}
            name="lastName"
            onChange={handleChange}
          />

          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.organizationName}
            name="organizationName"
            onChange={handleChange}
          />

          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.emailAddress}
            name="emailAddress"
            onChange={handleChange}
          />

          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />

          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.streetAddress}
            name="streetAddress"
            onChange={handleChange}
          />

          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.latitude}
            name="latitude"
            onChange={handleChange}
          />

          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.longitude}
            name="longitude"
            onChange={handleChange}
          />

          <Form.Label>Note</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.firstName}
            name="firstName"
            onChange={handleChange}
          />

          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.lastName}
            name="lastName"
            onChange={handleChange}
          />

          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.organizationName}
            name="organizationName"
            onChange={handleChange}
          />

          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.emailAddress}
            name="emailAddress"
            onChange={handleChange}
          />

          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />

          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.streetAddress}
            name="streetAddress"
            onChange={handleChange}
          />

          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.latitude}
            name="latitude"
            onChange={handleChange}
          />

          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={contact.longitude}
            name="longitude"
            onChange={handleChange}
          />

          <Form.Label>Note</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
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
