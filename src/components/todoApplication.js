import React, { Component } from 'react';
import ToDoTitle from '../components/todoTitle';
import ToDoInput from '../components/todoInput';
import ToDoList from '../components/todolist'
import firebase from '../firebase';

class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
        
    }
    componentDidMount(){
        const itemsRef = firebase.database().ref('items');
         itemsRef.on('value',(snapshot)=>{
          let items =snapshot.val();
          let newState =[];
          for(let item in items){
              newState.push({
                  id:item,
                  title:items[item]

              });

          }
            this.setState({data:newState})
         })

    }

    addTodo(val){
        const itemsRef = firebase.database().ref('items');
        itemsRef.push(val);
        // this.state.data.push(val);
        // this.setState({data: this.state.data});
    }
    removeTodoList(list){
        var s= list.trim();
        var array= this.state.data;
        for(var i =0; i<array.length;i++){
            if(array[i].title == s){
                const itemRef = firebase.database().ref(`/items/${array[i].id}`);
                itemRef.remove();
                array.splice(i,1);
            }
        }
        // var arrayIndex= array.indexOf(s);

        // if(arrayIndex>-1){
        // array.splice(arrayIndex,1);
        // }
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