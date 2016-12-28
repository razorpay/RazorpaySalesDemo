import React, {Component} from 'react';

class PaymentModalBody extends Component {
  render() {
    return (
      <div className="paymentModalBody">
        <form>
          <div id="from-fields">
            <div>
              <i></i>
              <label>Phone</label>
              <input type="tel" value="9835173042"></input>
            </div>
            <div>
              <i></i>
              <label>Email</label>
              <input type="email" value="lildicky@razorpay.com"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentModalBody;