import React, {Component} from 'react';
import classNames from 'classnames';

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
        <div className="inputWrap">
          <label>Merchant Name</label>
          <input
          className="input"
          type="text"
          placeholder={this.props.data.name}
          onChange={this.props.onNameChange}/>
        </div>

        <div className="inputWrap">
          <label>Payment Description</label>
          <input
            className="input"
            type="text"
            placeholder={this.props.data.desc}
            onChange={this.props.onDescChange}
          />
        </div>

        <div className="inputWrap">
          <label>Amount</label>
          <input
            className="input"
            type="text"
            placeholder={this.props.data.amount}
            onChange={this.props.onAmountChange}
          />
        </div>
      </div>
    );
  }
}

export default MerchantDetail;