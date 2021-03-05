
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import  CardType  from "./components/CardType.js";
// import  DataForm  from "./components/DataForm.js";
// import  CardResult  from "./components/CardResult.js";
import "./App.scss"
// import {A} from "hookrouter"

const Home = lazy(() => import('./Home'))
const CardType = lazy(() => import('./components/CardType'))
const Form = lazy(() => import('./components/DataForm'))
const Forms= lazy(() => import('./components/DataForms'))
const Result = lazy(() => import('./components/CardResult'))

// /components/CardType

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
   

    // return (
    //     <>
    //         <div className="navbar"> 
    //             <A className="nav_link" href="/"> Home</A>
    //             <A className="nav_link" href="/form"> Form</A>
    //             <A className="nav_link" href="/result"> Result</A>
    //         </div>
    //         <div className="container_main"> 
    //             <div className="product_main">
    //                 <div className="product_name"> 
    //                     <h1 className= "header_main"> Welcome to Total Money, please select a card of your choice </h1>
    //                 </div>
    //                 <div> 
    //                     <CardType balanceDuration = "28" offerDuration = "3" aprvalue = "21.9" transferFee = "2.7" />
    //                     <CardType balanceDuration = "24" offerDuration = "6" aprvalue = "23.9" transferFee = "2.7" />
    //                     <CardType balanceDuration = "12" offerDuration = "3" aprvalue = "25.9" transferFee = "2.7" />
    //                 </div>
    //                 <div className="form_main"> 
    //                     <DataForm/>
    //                 </div>
    //                 <div className="form_main"> 
    //                     <CardResult/>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
//  }

export default App