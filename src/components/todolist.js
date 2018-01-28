import React, { Component } from 'react';

class ToDoList extends Component {
 constructor(props, context) {
   super(props, context);

   this.createTasks = this.createTasks.bind(this);
 }

 createTasks(item) {
   return <li>{item}</li>
 }

 render() {
   var todoEntries = this.props.listdata;
   var listItems = todoEntries.map(this.createTasks);

   return (
     <ul className="theList">
         {listItems}
     </ul>
   );
 }
};


export default ToDoList;