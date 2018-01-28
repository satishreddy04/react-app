import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class ToDoInput extends Component {
    constructor (props)
{
    super(props);
  this.state={value:''};
  let s= props.addTodo;
    //this.onClick=this.onClick.bind(this);
}
addkodo (e) {
    let value = this.state.value;
   //this. props.addtodo = this.state.value;
 // alert(value);
    this.props.addTodo(value);
   // alert(this.state.value)
   

}

   // clickButton = (e) => console.log(e.target.value);

  render() {    
    return (
        <div className="input-group">
    <input refs="textbox" 
    type="text"  id="inpt" value={this.state.value}  class="form-control" placeholder="Enter here...."    onChange={this.handleChange.bind(this)}/>
    <div className="input-group-btn">
      <button className="btn btn-primary" type="submit"  onClick={this.addkodo.bind(this)} >
       Add
      </button>
    </div>
  </div>
    );
  }
   handleChange(event) {
    this.setState({value: event.target.value});
  }

  }

export default ToDoInput;