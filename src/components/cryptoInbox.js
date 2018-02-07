import React, { Component } from 'react';
import CryptoList from './cryptoList'


class CryptoInbox extends Component {
  render() {
    return (
        <div>
            <div class="inboxList">
            <CryptoList />
          </div>
        </div>
    );
  }
}

export default CryptoInbox;