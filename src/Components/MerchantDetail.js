import React, {Component} from 'react';
import classNames from 'classnames';
import ButtonBackToList from './ButtonBackToList';

class MerchantDetail extends Component {

  render() {

    var mDetailClasses = classNames({
      'merchantDetail': true,
      'visible-in-sidebar': this.props.visibleInSidebar
    });

    return (
      <div className={mDetailClasses}>
        <ButtonBackToList fireOnClick={this.props.backToList}/>
        {this.props.name}
      </div>
    );
  }
}

export default MerchantDetail;