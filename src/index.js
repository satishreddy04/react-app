import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from'./components/home';
import ToDoApp from'./components/todoApplication';
import ReduxExample from './components/reduxexample'
import { NavLink } from 'react-router-dom'
import CryptoApp from './components/cryptoapp'
import youtubeApp from './components/youtubeApp/youtubeApp'

import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
import {createStore} from 'redux';
import BookApp from './reducers/bookReducer';
import provider from 'react-redux';
let store= createStore(BookApp)
console.log(store.getState());

const API_KEY= 'AIzaSyA-dRMhREAg-LwhwBh5yt7t2s987szpiLI';

ReactDOM.render(
<provider store= {store}>
<Router>
    <div>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" >Quality Talks</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todoapp">Todo Application</NavLink></li>
        <li><NavLink to="/redux">Redux Example</NavLink></li>
        <li><NavLink to="/crypto">CrytpCurrencies</NavLink></li>
        <li><NavLink to="/youtube">Youtube App</NavLink></li>
        
        
      </ul>
    </div>
  </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/todoapp" component={ToDoApp}/>
      <Route path="/redux" component={ReduxExample}/>
      <Route path="/crypto" component={CryptoApp}/>
      <Route path="/youtube" component={youtubeApp}/>
      <div clasName="footer" id ="footer">
    <footer>
      
     <p>Contact infomratino : <a href="#">*******@gmail.com</a>@SKR 2018 </p> 
  
    </footer>
    </div>
    </div>
   
  </Router>
  </provider>, document.getElementById('root'));
registerServiceWorker();
