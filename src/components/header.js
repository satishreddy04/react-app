import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
class Header extends React.Component{
render(){
return(
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Quality Talks</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todoapp">Todo Application</NavLink></li>
        <li><NavLink href="#">About</NavLink></li>
        <li><NavLink href="#">Contact Details</NavLink></li>
      </ul>
    </div>
  </nav>
);
}
}
export default Header;