import React, {Component, PropTypes} from 'react';
import MerchantListItem from './MerchantListItem';

class MerchantList extends Component {
  static PropTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      showListItems: false
    };
  }

  render() {
    return (
      <ul className="merchantList">
        {
          this.props.data.map( (merchant, i) => {
            return (
              <MerchantListItem key={i} data={merchant} mid={i}/>
            );
          })
        }
      </ul>
    );
  }
}

export default MerchantList;