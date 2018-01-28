import React, { Component } from 'react';
import ToDoTitle from '../components/todoTitle';
import ToDoInput from '../components/todoInput';
import ToDoList from '../components/todolist'

class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }
    addTodo(val){
        this.state.data.push(val);
        this.setState({data: this.state.data});
    }
  render() {
    return (
        <div>
        <div className="titleHeader">
            <ToDoTitle></ToDoTitle>
        </div>
        <div className="todInput">
            <ToDoInput  addTodo={this.addTodo.bind(this)}/>
            <ToDoList listdata= {this.state.data} />
            </div>



        </div>
    );
  }
}

export default ToDoApp;