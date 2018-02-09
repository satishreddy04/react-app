import React, { Component } from 'react';
import CryptoList from './cryptoList'


class CryptoInbox extends Component {
    constructor(props, context) {
        super(props, context);
      }
      selectedVlauefromInbox(data){
          this.props.ClickedValue(data);
      }

  render() {
      let cryptoData= this.props.inboxData;
    return (
        <div>
            <div class="inboxList">
            <CryptoList cryptoList={cryptoData} selectedVlauefromInbox= {this.selectedVlauefromInbox.bind(this)}  />
          </div>
        </div>
    );
  }
}

export default CryptoInbox;