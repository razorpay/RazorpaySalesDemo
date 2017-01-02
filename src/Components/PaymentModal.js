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

  constructor(props) {
    super(props);
    // I know this is not very organic, but I am doing it once
    // Holla at me
    setTimeout(() => {
      this.refs.paymentModal.classList.remove('bounceIn');
    }, 1000);
  }

  render() {
    return (
      <div className="paymentModal bounceIn" ref="paymentModal">
        <PaymentModalHeader {...this.props}/>
        <PaymentModalBody {...this.props}/>
      </div>
    );
  }
}

export default PaymentModal;