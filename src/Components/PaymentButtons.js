import React, {Component} from 'react';

// Components
import ButtonPrimary from './ButtonPrimary';

class PaymentButtons extends Component {
  render() {
    return (
      <div className="paymentButtons fadeInUp">
        <ButtonPrimary text="Card" fireOnClick={this.props.payUsingCard}/>
        <ButtonPrimary text="Netbanking"/>
        <ButtonPrimary text="Wallets"/>
      </div>
    );
  }
}

export default PaymentButtons;