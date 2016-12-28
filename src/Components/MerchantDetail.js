import React, {Component} from 'react';
import classNames from 'classnames';

// Components
import DetailInput from './DetailInput';

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
          onChange={this.props.onChangeName}
        />

        <DetailInput
          labelText="Payment Description"
          type="text"
          placeholder={this.props.data.desc}
          onChange={this.props.onChangeDesc}
        />

        <DetailInput
          labelText="Amount"
          type="number"
          placeholder={this.props.data.amount}
          onChange={this.props.onChangeAmount}
        />
     </div>
    );
  }
}

export default MerchantDetail;