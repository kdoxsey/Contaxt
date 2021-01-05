import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function exampleReducer (state, action) {
  switch (action.type) {
  case 'OPEN_MODAL':
    return { open: true, dimmer: action.dimmer }
  case 'CLOSE_MODAL':
    return { open: false }
  default:
    throw new Error()
  }
}

function GetStarted () {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined
  })
  const { open, dimmer } = state

  return (
    <div className="background">
      <Button id="button"
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
      >
        Get Started
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Contaxt - your contacts in context</Modal.Header>
        <Modal.Content>
          <Link to="/sign-up">Sign up</Link>
          <Link to="/sign-in">Sign in</Link>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Not Now
          </Button>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Get Started
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default GetStarted
