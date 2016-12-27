import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import MerchantList from './MerchantList';
import MerchantDetail from './MerchantDetail';

class Sidebar extends Component {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    merchantData: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.visibleStates = {
      list: 'merchant-list',
      detail: 'merchant-detail'
    };

    this.state = {
      visibleState: this.visibleStates.list,
      // The merchant visible in the detail view
      visibleMerchant: 'Razorpay Sample Merchant'
    };

    // Bind this to methods
    this.showMerchantList = this.showMerchantList.bind(this);
    this.showMerchantDetail= this.showMerchantDetail.bind(this);
  }

  showMerchantDetail() {
    this.props.updateVisibleMerchant(arguments[0]);
    this.setState({
      visibleState: this.visibleStates.detail,
      visibleMerchant: arguments[0]
    });
  }

  showMerchantList() {
    this.setState({
      visibleState: this.visibleStates.list
    });
  }

  render() {
    var classes = classNames({
      'sidebar': true,
      'open': this.props.open
    });
    return (
      <div className={classes}>
        <MerchantList
          data={this.props.merchantData}
          visibleInSidebar={this.state.visibleState === this.visibleStates.list}
          fireOnClick={this.showMerchantDetail}
        />

        <MerchantDetail
          data={this.state.visibleMerchant}
          visibleInSidebar={this.state.visibleState === this.visibleStates.detail}
          backToList={this.showMerchantList}
          onNameChange={this.props.updateName}
          onDescChange={this.props.updateDesc}
          onAmountChange={this.props.updateAmount}
        />
      </div>
    );
  }
}

export default Sidebar;