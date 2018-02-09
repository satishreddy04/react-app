import React, { Component } from 'react';


class CryptoDetail extends Component {

  render() {
      let cryptoDetailsData=this.props.initialDetialsData;
   console.log(cryptoDetailsData);
    return (
        <div>
        <h1>{cryptoDetailsData.name}</h1>
          
        </div>
    );
  }
}

export default CryptoDetail;