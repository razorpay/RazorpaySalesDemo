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
        <span>
          <ButtonBackToList
            text="&#9664;"
            fireOnClick={this.props.backToList}
          />
          {this.props.subtext}
        </span>
      </div>
    );
  }
}

export default SidebarHeader;