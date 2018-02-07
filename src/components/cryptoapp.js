import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import CryptoInbox from './cryptoInbox'
import CryptoDetail  from './cryptoDetail'


class CryptoApp extends Component {
  render() {
    return (
        <div>
        <div class="page-header"><h1>Crypto Currency Tracker</h1> </div>
           <div class="row">
           <div class="col-lg-3 cInbox"><CryptoInbox /></div>
           <div class="col-lg-9 cDetail"><CryptoDetail /></div>
         </div>
        </div>
    );
  }
}

export default CryptoApp;