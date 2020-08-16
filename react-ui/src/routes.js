import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home} from './components'
import App from './App'

const Routes = () => {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route exact path='/' component={App} />
    </Switch>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
