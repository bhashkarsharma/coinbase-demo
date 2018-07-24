import ReactDOM from 'react-dom'
import React from 'react'
import ProductOverview from './components/ProductOverview'
import ProductStats from './components/ProductStats'
import { HashRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={ProductOverview} />
            <Route path="/stats/:id" component={ProductStats} />
        </Switch>
    </HashRouter>,
    document.getElementById("app-root")
)