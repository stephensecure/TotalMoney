import React from 'react';
import ReactDom from 'react-dom';
// import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App'


// Show the react component on the Screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
)
