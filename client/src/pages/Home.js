
import React, { Component } from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "../components/Navpills";

import Tips from "../pages/Tips";
import otc from "../pages/otc";
import Login from "../pages/Login";
import Medication from "../pages/Medication";
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
// import Auth from './Auth/Auth.js';
import { Button } from 'react-bootstrap';




var reactNavBar = require('react-nav-bar');
var NavBar = reactNavBar.NavBar;
var Menu = reactNavBar.Menu;


// <body class="home-page -theme-light -page-index"><div id="main-wrap">
//     <div id="banner-wrap" class="background-custom-background">
//       <nav>
//         <div class="nav-wrapper">
          
//           <ul id="nav-mobile" class="right hide-on-med-and-down">


const Home = () =>
  <div>
    <h1><center>Welcome to Mi MediAmig<sub>X</sub></center></h1>
    <center><p>
      Mi MediAmig<sub>X</sub>
    </p></center>
  </div>;

export default Home;




 












// import React from 'react';
// import { Route, Router } from 'react-router-dom';
// import App from './App';
// import Home from './Home/Home';
// import Callback from './Callback/Callback';
// import Auth from './Auth/Auth';
// import history from './history';

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

// export const makeMainRoutes = () => {
//   return (
//     <Router history={history} component={App}>
//       <div>
//         <Route path="/" render={(props) => <App auth={auth} {...props} />} />
//         <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
//         <Route path="/callback" render={(props) => {
//           handleAuthentication(props);
//           return <Callback {...props} /> 
//         }}/>
//       </div>
//     </Router>
//   );
// }