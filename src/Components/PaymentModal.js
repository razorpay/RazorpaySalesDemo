import React, {Component, PropTypes} from 'react';
import PaymentModalHeader from  './PaymentModalHeader';
import PaymentModalBody from './PaymentModalBody';

class PaymentModal extends Component {
  static PropTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired
  }

  render() {
    var {name, desc, amount, logo} = this.props.data;
    return (
      <div className="paymentModal bounceIn">
        <PaymentModalHeader
          merchantName={name}
          paymentDesc={desc}
          amount={amount}
        />
        <PaymentModalBody />
      </div>
    );
  }
}

export default PaymentModal;