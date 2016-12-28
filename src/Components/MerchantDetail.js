import React, {Component} from 'react';
import classNames from 'classnames';

// Components
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
        <input
          className="input"
          type="text"
          placeholder={this.props.data.name}
          onChange={this.props.onNameChange}/>

        <input
          className="input"
          type="text"
          placeholder={this.props.data.desc}
          onChange={this.props.onDescChange}
        />

        <input
          className="input"
          type="text"
          placeholder={this.props.data.amount}
          onChange={this.props.onAmountChange}
        />
      </div>
    );
  }
}

export default MerchantDetail;