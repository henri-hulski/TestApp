import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'

export default connect(
  {
    authenticated: state`authenticated`,
  },
  function NavBar({ authenticated }) {
    return (
      <div style={{ float: 'right', margin: '10px 50px' }}>
        <a href="/#/login">{authenticated ? 'Logout' : 'Login'}</a>
      </div>
    )
  }
)
