import React, {Component} from 'react';

class DetailInput extends Component {
  render() {
    return (
      <div className="inputWrap">
        <label>{this.props.labelText}</label>
        <input
        className="input"
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default DetailInput;