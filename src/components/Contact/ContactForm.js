import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = ({ contact, user, handleSubmit, handleChange, match }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId='contact'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder="first Name here"
          value={contact.firstName}
          name="firstName"
          onChange={handleChange}
        />

        <Form.Group controlId='task'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder="last Name here"
            value={contact.lastName}
            name="name"
            onChange={handleChange}
          />

        <Form.Label>Latitude</Form.Label>
        <Form.Control
          required
          type='number'
          placeholder="Latitude here"
          value={contact.latitude}
          name="latitude"
          onChange={handleChange}
        />

        <Form.Label>Longitude</Form.Label>
        <Form.Control
          required
          type='number'
          placeholder="Longitude here"
          value={contact.longitude}
          name="longitude"
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        className="form-submit-button"
        type="submit"
      >
      Submit
      </Button>
    </form>
  )
}

export default ContactForm
