import React from 'react'
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {Switch, Route}  from 'react-router-dom'

function App() {




  return (
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/watch" component={Watch}/>
      <Route exact path="/login" component={Login}/>
  </Switch>
  );

}

export default App;
