import React, {Component} from 'react';

class PaymentModalHeader extends Component {

  constructor(props) {
    super(props);

    this.infoShouldAnimate = true;
  }

  componentWillReceiveProps(nextProps) {
    this.infoShouldAnimate = nextProps.id !== this.props.id;
  }

  render() {

    if(this.refs.info && this.infoShouldAnimate) {
      this.refs.info.classList.remove('fadeInUp');
      this.refs.info.offsetWidth;
      this.refs.info.classList.add('fadeInUp');
    }

    return (
      <div style={{backgroundColor: this.props.color}} className="paymentModalHeader">
        <div id="info" ref="info">
          <div
            style={{
              backgroundImage: `url(${this.props.logo})`
            }}
            id="header-merchant-logo"></div>
          <div id="header-merchant-name">{this.props.name}</div>
          <div id="header-description">{this.props.desc}</div>
          <div id="header-amount">₹{Math.round(this.props.amount * 100) / 100}</div>
        </div>
      </div>
    );
  }
}

export default PaymentModalHeader;