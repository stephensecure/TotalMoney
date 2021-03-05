
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.scss"

const Home = lazy(() => import('./Home'))
const CardType = lazy(() => import('./components/CardType'))
const Form = lazy(() => import('./components/DataForm'))
const Forms= lazy(() => import('./components/DataForms'))
const Result = lazy(() => import('./components/CardResult'))


const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/CardType" component={CardType}/>
            <Route path="/form" component={Form}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/result" component={Result}/>
        </Switch>
        </Suspense>
    </Router>
)


export default App