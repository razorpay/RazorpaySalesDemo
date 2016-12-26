import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Sidebar extends Component {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool
  }

  render() {

    var sidebarClasses = classNames({
      'sidebar': true,
      'sidebar-open': this.props.open
    });

    return (
      <div className={sidebarClasses}>
        <h1>This is the sidebar</h1>
      </div>
    );
  }
}

export default Sidebar;