import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Redirect to="/404" />
    </Switch>
)

export { Routes }
