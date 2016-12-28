import React, {Component} from 'react';

class PaymentModalBody extends Component {
  render() {
    return (
      <div className="paymentModalBody">
        <div id="from-fields">
          <div className="inputWrap">
            <label>Phone</label>
            <input className="input" type="tel" value="9835173042"></input>
          </div>
          <div className="inputWrap">
            <label>Email</label>
            <input className="input" type="email" value="lildicky@razorpay.com"></input>
          </div>
        </div>
        <div id="legend">Select payment method</div>
        <div id="payment-options">
          <div className="payment-option" id="po-card">
            Card
          </div>
          <div className="payment-option" id="po-netbanking">
            Netbanking
          </div>
          <div className="payment-option" id="po-wallet">
            Wallet
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentModalBody;