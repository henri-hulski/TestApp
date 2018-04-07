import { state } from 'cerebral/tags'
import { set, when } from 'cerebral/operators'
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
      when(state`isSmiling`),
      {
        true: [set(state`isSmiling`, false)],
        false: [set(state`isSmiling`, true)],
      },
    ],
    false: redirectToSignal('loginRouted'),
  },
]
