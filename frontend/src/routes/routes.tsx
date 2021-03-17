import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginAccount } from '../pages/LoginAccount'

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={LoginAccount}/>
      <Redirect to="/404" />
    </Switch>
)

export { Routes }
