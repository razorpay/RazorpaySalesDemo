import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class MerchantListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    mid: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.data.name);
  }

  render() {
    var {name} = this.props.data;
    return (
      <li className="merchantListItem" onClick={this.handleClick}>
        <div className="li-merchantImage"></div>
        <div className="li-merchantName">{name}</div>
        <i className="arrow-right"></i>
      </li>
    );
  }
}

export default MerchantListItem;