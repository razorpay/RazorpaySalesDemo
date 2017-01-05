import React, {Component, PropTypes} from 'react';

var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();

var formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;

class Foreground extends Component {
  static PropTypes = {
    amount: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div
        className="masterCardContainer"
        ref="masterCardContainer"
        data-mname={this.props.name}
        data-date={formattedDate}
      >
        <div className="masterCardWindow" ref="masterCardWindow" data-amount={`Rs ${this.props.amount}`}>
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