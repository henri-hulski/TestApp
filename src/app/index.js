import { Module } from 'cerebral'
import Router from '@cerebral/router'

import * as sequences from './sequences'

const router = Router({
  routes: [
    {
      path: '/login',
      signal: 'loginRouted',
    },
    {
      path: '/',
      signal: 'homeRouted',
    },
  ],
  onlyHash: true,
})

export default Module({
  state: {
    currentPage: '',
    authenticated: false,
    isSmiling: true,
  },
  signals: {
    homeRouted: sequences.routeToHome,
    loginRouted: sequences.routeToLogin,
    toggleLoginClicked: sequences.toggleLogin,
    smileyClicked: sequences.toggleSmiley,
  },
  modules: {
    router,
  },
})
