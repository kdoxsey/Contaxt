import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { createContact } from '../../api/contact'

class ContactCreate extends Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      contact: {
        firstName: '',
        lastName: '',
        organizationName: '',
        emailAddress: '',
        phoneNumber: '',
        streetAddress: '',
        latitude: '',
        longitude: '',
        note: ''
      },
      createdId: null
    }
  }
  handleChange = (event) => {
    event.persist()

    this.setState(prevState => {
      const updatedField = {
        [event.target.name]: event.target.value
      }

      this.setState(currState => {
        const updatedContact = { ...currState.contact, ...updatedField }
        return { contact: updatedContact }
      })
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    createContact(user, this.state.contact)
      .then((res) => {
        this.setState({ createdId: res.data.contact._id })
      })
      .then(() => {
        msgAlert({
          heading: 'Failed',
          message: 'failed',
          variant: 'success'
        })
      })
      .catch((err) => {
        msgAlert({
          heading: 'failed',
          message: 'kevin dont try to skip this shit' + err.message,
          variant: 'danger'
        })
      })
  }
  render () {
    if (this.state.createId) {
      return <Redirect to='/contacts'/>
    }
    return (
      <React.Fragment>
        <h1>new contact</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first name"
            value={this.state.contact.firstName}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="last name"
            value={this.state.contact.lastName}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="organization name"
            value={this.state.contact.organizationName}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="email address"
            value={this.state.contact.emailAddress}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="phone numbers"
            value={this.state.contact.phoneNumber}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="street address"
            value={this.state.contact.streetAddress}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="latitude"
            value={this.state.contact.latitude}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="longitude"
            value={this.state.contact.longitude}
            onChange={this.handleChange}
            name='firstName'
          />
          <input
            placeholder="note"
            value={this.state.contact.note}
            onChange={this.handleChange}
            name='note'
          />
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
// return (
//   <React.Fragment>
//   <h1>something</h1>
//   </React.Fragment>
// )

export default withRouter(ContactCreate)
