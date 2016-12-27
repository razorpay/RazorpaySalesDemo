import React, {Component} from 'react';

class PaymentModalHeader extends Component {
  render() {
    return (
      <div className="paymentModalHeader">
        <div id="header-merchant-logo"></div>
        <div id="header-merchant-name">{this.props.merchantName}</div>
        <div id="header-description">{this.props.paymentDesc}</div>
        <div id="header-amount">₹{this.props.amount}</div>
      </div>
    );
  }
}

export default PaymentModalHeader;