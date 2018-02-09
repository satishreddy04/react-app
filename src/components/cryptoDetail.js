import React, { Component } from 'react';


class CryptoDetail extends Component {

  render() {
      let cryptoDetailsData=this.props.initialDetialsData;
   console.log(cryptoDetailsData);
    return (
        <div class="mainDetailsPage">
            <div id="mainHead">
        <span>{cryptoDetailsData.name}</span>
        </div>
          
        </div>
    );
  }
}

export default CryptoDetail;