import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/profile/Profile'
import EditProfile from './components/profile/EditProfile'
import ChangePassword from './components/profile/ChangePassword'
import Dashboard from './components/admin/Dashboard'
import NotFound from './components/layout/NotFound'
import PrivateRoute from './components/routing/PrivateRoute'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute
              exact
              path='/profile/edit-profile'
              component={EditProfile}
            />
            <PrivateRoute
              exact
              path='/profile/change-password'
              component={ChangePassword}
            />
            <PrivateRoute path='/admin/:active_tab?' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
