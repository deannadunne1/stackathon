import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import {Home} from './components'

const Routes = () => {
  return (
    <Route path='/home' component={Home} />
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
