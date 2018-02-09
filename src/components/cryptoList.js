import React, { Component } from 'react';


class CryptoList extends Component {
    constructor(props, context) {
        super(props, context);
     
      }
      handleClick(e){
          const selVal= e.target.getAttribute('data-key');
          this.props.selectedVlauefromInbox(selVal);
      }
  render() {
      
      var data= this.props.cryptoList;
    var listItems= data.map(function(data){
        return (
        <li class="lists" key={data.id} data-key={data.id} >
        <div data-key={data.id} className="listDiv">   
        {data.name} <span>({data.symbol})</span>
        </div>
        </li>
        )
    })
    return (
        <div>
          
                <div>
             <ul class="mainList" onClick={this.handleClick.bind(this)}>
                 <div>
              {listItems }
              </div>
             </ul>
             
             </div>
          </div>
       
    );
  
  }
}

export default CryptoList;