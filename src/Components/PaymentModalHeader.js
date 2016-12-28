import React, {Component} from 'react';

class PaymentModalHeader extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.color}} className="paymentModalHeader">
        <div id="header-merchant-logo"></div>
        <div id="header-merchant-name">{this.props.name}</div>
        <div id="header-description">{this.props.desc}</div>
        <div id="header-amount">₹{this.props.amount}</div>
      </div>
    );
  }
}

export default PaymentModalHeader;