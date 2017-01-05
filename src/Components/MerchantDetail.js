import React, {Component} from 'react';
import classNames from 'classnames';

// Components
import DetailInput from './DetailInput';
import {ChromePicker} from 'react-color';

class MerchantDetail extends Component {
  constructor(props) {
    super(props);

    // Bind 'this' to methods
    this.clearInputs = this.clearInputs.bind(this);
  }

  clearInputs() {
    this.refs.inputMerchantName.clear();
    this.refs.inputPaymentDescription.clear();
    this.refs.inputAmount.clear();
  }

  render() {

    var mDetailClasses = classNames({
      'merchantDetail': true,
      'visible-in-sidebar': this.props.visibleInSidebar
    });

    return (
      <div className={mDetailClasses}>
        <div className="merchantInfo">
          <div className="backIcon" onClick={this.props.backToList}></div>
          <div
            style={{
              backgroundImage: `url(${this.props.data.logo})`
            }}
            className="merchantLogo"></div>
          <h1>{this.props.data.name}</h1>
        </div>

        <DetailInput
          ref="inputMerchantName"
          labelText="Merchant Name"
          type="text"
          placeholder={this.props.data.name}
          onChange={this.props.onNameChange}
        />

        <DetailInput
          ref="inputPaymentDescription"
          labelText="Payment Description"
          type="text"
          placeholder={this.props.data.desc}
          onChange={this.props.onDescChange}
        />

        <DetailInput
          ref="inputAmount"
          labelText="Amount"
          type="number"
          placeholder={this.props.data.amount}
          onChange={this.props.onAmountChange}
        />

        <br/>
        <br/>

        <ChromePicker
          color={this.props.currentMerchantColor}
          onChange={this.props.onColorChange}
        />

     </div>
    );
  }
}

export default MerchantDetail;