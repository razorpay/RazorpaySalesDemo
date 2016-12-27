import React, {Component} from 'react';
import PaymentModalHeader from  './PaymentModalHeader';
import PaymentModalBody from './PaymentModalBody';

class PaymentModal extends Component {
  render() {
    return (
      <div className="paymentModal bounceIn">
        <PaymentModalHeader />
        <PaymentModalBody />
      </div>
    );
  }
}

export default PaymentModal;