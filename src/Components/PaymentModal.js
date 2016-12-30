import React, {Component, PropTypes} from 'react';
import PaymentModalHeader from  './PaymentModalHeader';
import PaymentModalBody from './PaymentModalBody';

class PaymentModal extends Component {
  static PropTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="paymentModal bounceIn">
        <PaymentModalHeader {...this.props}/>
        <PaymentModalBody {...this.props}/>
      </div>
    );
  }
}

export default PaymentModal;