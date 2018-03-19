import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import CryptoInbox from './cryptoInbox'
import CryptoDetail  from './cryptoDetail'
const API= 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY= 'redux';

class CryptoApp extends Component {
    constructor(props){
        super(props);
        this.state={
            initialData:[],
            initialDetialsData:[]
        }
    }
    componentDidMount(){
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({initialData:data})); 
        
    }
    clickedValue(data){
      console.log('clicked value',data);
        let obj= this.state.initialData.find(function(obj){
            return obj.id=== data
        })
       this.setState({initialDetialsData:obj})   
      
    }
  render() {
      const {initialData,initialDetialsData}= this.state;
     
    return (
        <div>
        <div class="page-header"><h1>D C </h1> </div>
           <div class="row">
           <div class="col-lg-3 cInbox"><CryptoInbox inboxData={this.state.initialData} ClickedValue={this.clickedValue.bind(this)} /></div>
           <div class="col-lg-9 cDetail"><CryptoDetail initialDetialsData={this.state.initialDetialsData} /></div>
         </div>
        </div>
    );
  }
}

export default CryptoApp;