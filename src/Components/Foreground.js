import React, {Component, PropTypes} from 'react';

class Foreground extends Component {
  static PropTypes = {
    amount: PropTypes.number,
    desc: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="masterCardContainer" ref="masterCardContainer">
        <div className="masterCardWindow" ref="masterCardWindow">
        </div>
        <div className="paymentConfirmationWindow">
          <h1>Thanks for your order!</h1>

          <div className="row">
            <div className="left-col">
              Amount
            </div>
            <div className="right-col">
              ₹{this.props.amount || 0}
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              Date
            </div>
            <div className="right-col">
              20.09.2016 18:02
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              Transaction ID
            </div>
            <div className="right-col">
              pay_38UehrY839Je4kK
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              Item
            </div>
            <div className="right-col">
              {this.props.desc || 'Payment #42'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Foreground;