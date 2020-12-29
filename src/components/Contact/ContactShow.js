import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { showContact, deleteContact } from '../../api/contact'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'
// import ContactCreate from './ContactCreate'

const ContactShow = (props) => {
  const [contact, setContact] = useState([])
  const [update, setUpdate] = useState(false)
  const [close, setClose] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const { user, msgAlert, match, history } = props
  useEffect(() => {
    showContact(user, match.params.contactId)
      .then(res => {
        setContact(res.data.contact)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Contact Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [match.params.contactId])

  const handleDelete = () => {
    deleteContact(user, match.params.contactId)
      .then(() => {
        msgAlert({
          heading: 'Contact deleted',
          message: 'Back to the list of contacts',
          variant: 'success'
        })
      })
      .then(setDeleted(true))
      .then(() => history.push('/contacts'))
      .then(console.log(contact))
      .catch(err => {
        msgAlert({
          heading: 'Deletion failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }
  const handleUpdate = () => {
    setUpdate(true)
  }
  const handleClose = () => {
    setClose(true)
  }

  if (deleted) {
    return <Redirect to={'/contacts/'} />
  }

  if (close) {
    return <Redirect to={'/contacts/'} />
  }

  if (update) {
    return <Redirect to={'/contact-update/' + contact._id} />
  }
  return (
    <div>
      <Fragment>
        <Card>
          <Card.Body>
            {contact.firstName} {contact.lastName} <br />
            {contact.organizationName} <br />
            {contact.streetAddress }<br />
            {contact.phoneNumber}<br />
            {contact.emailAddress}<br />
            {contact.note}<br />
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleClose}>x</Button>
          </Card.Body>
        </Card>
      </Fragment>
    </div>
  )
}

export default withRouter(ContactShow)
