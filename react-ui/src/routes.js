import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, Emergency, DrugSearch, Alone, Settings} from './components'

const Routes = () => {
  return (
    <Switch>
      <Route path='/emergency' component={Emergency} />
      <Route path='/drugsearch' component={DrugSearch} />
      <Route path='/alone' component={Alone} />
      <Route path='/settings' component={Settings} />
      <Route component={Home} />
    </Switch>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
