import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import MerchantList from './MerchantList';

class Sidebar extends Component {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    merchantData: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    var classes = classNames({
      'sidebar': true,
      'open': this.props.open
    });
    return (
      <div className={classes}>
        <MerchantList data={this.props.merchantData} showing={true}/>
      </div>
    );
  }
}

export default Sidebar;