import React, {Component} from 'react';

class ButtonBackToList extends Component {
  render() {
    return (
      <button className="buttonBackToList" onClick={this.props.fireOnClick}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonBackToList;