import React, { Component } from 'react';
import Books from '../components/books'
import {createStore} from 'redux';
import BookApp from '../reducers/bookReducer';
import provider from 'react-redux';
let store= createStore(BookApp)
class ReduxExample extends Component {
    constructor(props){
        // Pass props back to parent
        super(props);
      }
     
      submitBook(input){
      }
    


  render() {
      let titleInput;
      return(
        <div>
         <Books store={store}/>
        </div>
      )
      
  }
}

export default ReduxExample;