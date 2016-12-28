import React, {Component, PropTypes} from 'react';

class MerchantListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired
  }

  render() {
    var {name} = this.props.data;
    return (
      <li className="merchantListItem" onClick={this.props.showMerchantDetail}>
        <div className="li-merchantImage"></div>
        <div className="li-merchantName">{name}</div>
        <i className="arrow-right"></i>
      </li>
    );
  }
}

export default MerchantListItem;