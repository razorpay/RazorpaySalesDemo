import React, {Component} from 'react';

class ButtonStart extends Component {
  render() {
    return (
      <button className="buttonStart" onClick={this.props.fireOnClick}>
        Start
      </button>
    );
  }
}

export default ButtonStart;