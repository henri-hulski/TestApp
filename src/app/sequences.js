import { state } from 'cerebral/tags'
import { set, when, equals } from 'cerebral/operators'
import { redirectToSignal } from '@cerebral/router/operators'

export const routeToHome = set(state`currentPage`, 'home')

export const routeToLogin = set(state`currentPage`, 'login')

export const toggleLogin = [
  when(state`authenticated`),
  {
    true: set(state`authenticated`, false),
    false: set(state`authenticated`, true),
  },
  redirectToSignal('homeRouted'),
]

export const toggleSmiley = [
  when(state`authenticated`),
  {
    true: [
      equals(state`mood`),
      {
        ':-)': set(state`mood`, ':-|'),
        ':-|': set(state`mood`, ':-('),
        ':-(': set(state`mood`, ';-)'),
        ';-)': set(state`mood`, ':-)'),
      },
    ],
    false: redirectToSignal('loginRouted'),
  },
]
