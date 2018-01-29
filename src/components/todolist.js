import React, { Component } from 'react';

class ToDoList extends Component {
 constructor(props, context) {
   super(props, context);

   this.createTasks = this.createTasks.bind(this);
 }
 removeList(e){
     var listRemoveName=(e.currentTarget.parentElement.innerText).slice(0, -1);
     
     this.props.removeTodoList(listRemoveName);
     
 }
 handleClick(e){
     console.log(e.target.value);
 }

 createTasks(item) {
   return <li onClick={this.handleClick.bind(this)}  className=" lists list-group-item list-group-item-action list-group-item-info">{item.title} <button type="button" onClick={this.removeList.bind(this)} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></li>
 }

 render() {
   var todoEntries = this.props.listdata;
   var listItems = todoEntries.map(this.createTasks);

   return (
       <div class="lsitgroup">
     <ul className=" list-group">
        <li className=" list-group-item list-group-item-success"> {listItems} </li>
     </ul>
     </div>
   );
 }
};


export default ToDoList;