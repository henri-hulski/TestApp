import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

import NavBar from './NavBar'

export default connect(
  {
    isSmiling: state`isSmiling`,
    smileyClicked: signal`smileyClicked`,
  },
  function Home({ isSmiling, smileyClicked }) {
    return (
      <div>
        <NavBar />
        <h2>TestApp</h2>
        <p>
          How you feel today?&nbsp;&nbsp;
          <button onClick={() => smileyClicked()}>
            <strong>{isSmiling ? ' :-) ' : ' :-( '}</strong>
          </button>
        </p>
      </div>
    )
  }
)
