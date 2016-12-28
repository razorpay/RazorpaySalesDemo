import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// Components
import MerchantListItem from './MerchantListItem';

class MerchantList extends Component {
  static PropTypes = {
    className: PropTypes.string,
    // An array holding all the merchants
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
                showMerchantDetail={this.props.showMerchantDetail.bind(null, this.props.data[i])}
              />
            );
          })
        }
      </ul>
    );
  }
}

export default MerchantList;