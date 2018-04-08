import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

import NavBar from './NavBar'

export default connect(
  {
    mood: state`mood`,
    smileyClicked: signal`smileyClicked`,
  },
  function Home({ mood, smileyClicked }) {
    return (
      <div>
        <NavBar />
        <h2>TestApp</h2>
        <p>
          How you feel today?&nbsp;&nbsp;&nbsp;
          <button onClick={() => smileyClicked()}>
            <strong>{` ${mood} `}</strong>
          </button>
        </p>
      </div>
    )
  }
)
