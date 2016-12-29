import React, {Component} from 'react';

class ButtonPrimary extends Component {
  render() {
    return (
      <button 
        className="buttonPrimary" 
        onClick={this.props.fireOnClick}
        id={this.props.id}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonPrimary;