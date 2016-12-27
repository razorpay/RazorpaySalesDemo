import React, {Component, PropTypes} from 'react';
import MerchantListItem from './MerchantListItem';
import classNames from 'classnames';

class MerchantList extends Component {
  static PropTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired
  }

  render() {
    var mListClasses = classNames({
      'merchantList': true,
      'visible-in-sidebar': this.props.visibleInSidebar
    });

    return (
      <ul className={mListClasses}>
        {
          this.props.data.map( (merchant, i) => {
            return (
              <MerchantListItem
                key={i}
                data={merchant}
                onClick={this.props.fireOnClick.bind(null, this.props.data[i])}
              />
            );
          })
        }
      </ul>
    );
  }
}

export default MerchantList;