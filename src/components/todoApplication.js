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
    removeTodoList(list){
        var s= list.trim();
        var array= this.state.data;
        var arrayIndex= array.indexOf(s);

        if(arrayIndex>-1){
        array.splice(arrayIndex,1);
        }
        this.setState({data:array});
    }
  render() {
    return (
        <div>
        <div className="titleHeader">
            <ToDoTitle></ToDoTitle>
        </div>
        <div className="todInput">
            <ToDoInput  addTodo={this.addTodo.bind(this)}/>
            <ToDoList listdata= {this.state.data} removeTodoList={this.removeTodoList.bind(this)} />
            </div>



        </div>
    );
  }
}

export default ToDoApp;