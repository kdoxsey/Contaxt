import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = ({ contact, user, handleSubmit, handleChange }) => {
  // if (match.url === '/contact-update/' + contact._id) {
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <Form.Group controlId='contact'>
  //         <Form.Label>First Name</Form.Label>
  //         <Form.Control
  //           required
  //           type='text'
  //           placeholder='First name'
  //           value={contact.firstName}
  //           name='firstName'
  //           onChange={handleChange}
  //         />
  //         <Form.Label>Last Name</Form.Label>
  //         <Form.Control
  //           required
  //           type='text'
  //           placeholder='Last name'
  //           value={contact.lastName}
  //           name='lasttName'
  //           onChange={handleChange}
  //         />
  //         <Form.Label>Latitude</Form.Label>
  //         <Form.Control
  //           required
  //           type='number'
  //           placeholder='Latitude'
  //           value={contact.latitude}
  //           name='latitude'
  //           onChange={handleChange}
  //         />
  //         <Form.Label>Longitude</Form.Label>
  //         <Form.Control
  //           required
  //           type='number'
  //           placeholder='Longitude'
  //           value={contact.longitude}
  //           name='longitude'
  //           onChange={handleChange}
  //         />
  //       </Form.Group>
  //       <Button
  //         variant="primary"
  //         type="submit"
  //       >
  //       Submit
  //       </Button>
  //     </form>
  //   )
  // } else {
  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId='contact'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='First name'
          value={contact.firstName}
          name='firstName'
          onChange={handleChange}
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Last name'
          value={contact.lastName}
          name='lasttName'
          onChange={handleChange}
        />
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          required
          type='number'
          placeholder='Latitude'
          value={contact.latitude}
          name='latitude'
          onChange={handleChange}
        />
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          required
          type='number'
          placeholder='Longitude'
          value={contact.longitude}
          name='longitude'
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
      Submit
      </Button>
    </form>
  )
}

export default ContactForm
