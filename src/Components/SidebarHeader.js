import React, {Component} from 'react';
import classNames from 'classnames';

// Components
import ButtonBackToList from './ButtonBackToList';

class SidebarHeader extends Component {
   render() {
    var bClasses = classNames({
      'sidebarHeader': true,
      'hasBackButton': this.props.backButtonVisible
    });

    return (
      <div className={bClasses}>
        <h1>{this.props.text}</h1>
        <div className="subheader">
          <i className="arrow-left"></i>
          <ButtonBackToList
            text="Merchants"
            fireOnClick={this.props.backToList}
          />
        </div>
      </div>
    );
  }
}

export default SidebarHeader;