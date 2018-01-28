import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from'./components/home';
import ToDoApp from'./components/todoApplication';
import { NavLink } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  


ReactDOM.render(<Router>
    <div>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" >Quality Talks</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todoapp">Todo Application</NavLink></li>
        
      </ul>
    </div>
  </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/todoapp" component={ToDoApp}/>
      <div clasName="footer" id ="footer">
    <footer>
      
     <p>Contact infomratino : <a href="#">*******@gmail.com</a>@SKR 2018 </p> 
  
    </footer>
    </div>
    </div>
   
  </Router>, document.getElementById('root'));
registerServiceWorker();
