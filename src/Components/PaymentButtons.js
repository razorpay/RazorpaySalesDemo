import React, {Component} from 'react';

// Components
import ButtonPrimary from './ButtonPrimary';

class PaymentButtonsT extends Component {
  render() {
    return (
      <div className="paymentButtons">
        <ButtonPrimary text="Card"/>
        <ButtonPrimary text="Netbanking"/>
        <ButtonPrimary text="Wallets"/>
      </div>
    );
  }
}

export default PaymentButtonsT;