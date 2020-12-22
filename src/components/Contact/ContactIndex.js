import React, { Component } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class ContactIndex extends Component {
  constructor () {
    super()

    this.state = {
      contacts: null
    }
  }

  componentDidMount () {
    axios(apiUrl + '/contacts')
      .then(console.log)
      .catch(console.error)
  }
  render () {
    return (
      <div>
        <h2>contacts</h2>
        <ul>
          <li>contact 1</li>
          <li>contact 2</li>
          <li>contact 3</li>
        </ul>
      </div>
    )
  }
}
// <div>
//   <h2>list of contacts</h2>
//   <ul>
//     <li>contact 1</li>
//     <li>contact 2</li>
//     <li>contact 3</li>
//   </ul>
// </div>

export default ContactIndex
