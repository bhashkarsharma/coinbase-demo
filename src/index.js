import ReactDOM from 'react-dom'
import React from 'react'
import ProductOverview from './components/ProductOverview'
import ProductStats from './components/ProductStats'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ProductOverview} />
            <Route path="/stats/:id" component={ProductStats} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app-root")
)