import React, {Component} from 'react';
import classNames from 'classnames';

// Components
import DetailInput from './DetailInput';
import {ChromePicker} from 'react-color';

class MerchantDetail extends Component {
  render() {

    var mDetailClasses = classNames({
      'merchantDetail': true,
      'visible-in-sidebar': this.props.visibleInSidebar
    });

    return (
      <div className={mDetailClasses}>
        <div className="merchantInfo">
          <div className="merchantLogo"></div>
          <h1>{this.props.data.name}</h1>
        </div>

        <DetailInput
          labelText="Merchant Name"
          type="text"
          placeholder={this.props.data.name}
          onChange={this.props.onNameChange}
        />

        <DetailInput
          labelText="Payment Description"
          type="text"
          placeholder={this.props.data.desc}
          onChange={this.props.onDescChange}
        />

        <DetailInput
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