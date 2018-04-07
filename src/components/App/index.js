import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'

import Home from '../Home'
import Login from '../Login'

const pages = {
  home: Home,
  login: Login,
}

export default connect(
  {
    currentPage: state`currentPage`,
  },
  function App({ currentPage }) {
    const Page = pages[currentPage]

    return (
      <div>
        <Page />
      </div>
    )
  }
)
