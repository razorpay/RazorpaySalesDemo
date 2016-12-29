import React, {Component, PropTypes} from 'react';

// Based on the prop visible renders or ignores rendering of nested components
class ConditionalComp extends Component {
  static PropTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool.isRequired
  };

  render() {
    if(this.props.visible) {
      return this.props.children;
    } else {
      return null;
    }
 }
}

export default ConditionalComp;