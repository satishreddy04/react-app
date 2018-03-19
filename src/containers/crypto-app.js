import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import CryptoInbox from '../components/cryptoInbox'
import CryptoDetail  from '../components/cryptoDetail'
// const API= 'https://api.coinmarketcap.com/v1/ticker/';
import {fetchCryptData} from '../actions/index'
const DEFAULT_QUERY= 'redux';

class CryptoApp extends Component {
    constructor(props){
        super(props);
        this.state={
            initialData:[],
            initialDetialsData:[]
        }
        const initialData= this.props.cryptodata.data;
    }
    componentDidMount(){
      this.props.fetchCryptData();
        
    }
    clickedValue(data){
       
        let obj= this.props.cryptodata.data.find(function(obj){
            return obj.id=== data
        })
        console.log(obj);
       this.setState({initialDetialsData:obj})   
      
    }
  render() {
      
   console.log(this.props.cryptodata.data);
    // console.log(this.props.cryptodata.data);
    const initialData= this.props.cryptodata.data;

    if(initialData){
        
        return (
            <div>
            <div class="page-header"><h1>D C </h1> </div>
               <div class="row">
               <div class="col-lg-3 cInbox"><CryptoInbox inboxData={this.props.cryptodata.data} ClickedValue={this.clickedValue.bind(this)} /></div>
               <div class="col-lg-9 cDetail"><CryptoDetail initialDetialsData={this.state.initialDetialsData} /></div>
             </div>
            </div>
        );

    }
    else{
        return(
       <div>loading.....</div>
        )
    }
 
    //   const {initialData,initialDetialsData}= this.state;
     
  
  }
}

function mapStateToProps(state){
    return {cryptodata: state.cryptodata}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchCryptData},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CryptoApp);
