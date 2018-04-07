import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
  {
    authenticated: state`authenticated`,
    toggleLoginClicked: signal`toggleLoginClicked`,
  },
  function Login({ authenticated, toggleLoginClicked }) {
    return (
      <div>
        <h2>{authenticated ? 'Logout' : 'Login'}</h2>
        <p>
          <button onClick={() => toggleLoginClicked()}>
            &nbsp;{authenticated ? 'Logout' : 'Login'}&nbsp;
          </button>
        </p>
      </div>
    )
  }
)
