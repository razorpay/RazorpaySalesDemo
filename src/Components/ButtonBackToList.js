import React, {Component} from 'react';

class ButtonBackToList extends Component {
  render() {
    return (
      <button onClick={this.props.fireOnClick}>
        Back
      </button>
    );
  }
}

export default ButtonBackToList;