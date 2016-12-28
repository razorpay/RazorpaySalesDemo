import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Components
import MerchantList from './MerchantList';
import MerchantDetail from './MerchantDetail';

class Sidebar extends Component {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    merchants: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    // The  sidebar either has a list of merchants visible or editable details.
    // The following two states imply those.
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

  /*
  * Function: showMerchantDetail
  * -----------------------------
  * Switches to merchant detail view.
  * Data for the merchant that is to be shown
  * is passed as first argument (arguments[0]) via bind.
  *****
  * This function is fired when merchant list item is
  * clicked.
  */

  showMerchantDetail() {
    // Update the data in Payment Modal
    this.props.updateCurrentMerchant(arguments[0]);
    // Switch to Merchant detail view
    this.setState({
      visibleState: this.visibleStates.detail,
      visibleMerchant: arguments[0]
    });
  }

 /*
 * Function: showMerchantList
 * ---------------------------------------------
 * Switches to Merchant list view inside sidebar.
 */
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
          data={this.props.merchants}
          visibleInSidebar={this.state.visibleState === this.visibleStates.list}
          showMerchantDetail={this.showMerchantDetail}
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