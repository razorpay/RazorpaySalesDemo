import React, {Component, PropTypes} from 'react';

class ButtonPrimary extends Component {
  static PropTypes = {
    className: PropTypes.string,
  }

  render() {
    return (
      <button
        style={this.props.style || {}}
        className={this.props.className || "buttonPrimary"}
        onClick={this.props.fireOnClick}
        id={this.props.id}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonPrimary;