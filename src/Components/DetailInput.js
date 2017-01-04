import React, {Component} from 'react';

class DetailInput extends Component {
  constructor(props) {
    super(props);

    // Bind 'this' to methods
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.refs.detailInput.value = '';
  }

  render() {
    return (
      <div className="inputWrap">
        <label>{this.props.labelText}</label>
        <input
          ref="detailInput"
          className="input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={(e) => {
            this.props.onChange(e);
            if(!e.target.value)
              e.target.placeholder = e.target.value;
          }}
        />
      </div>
    );
  }
}

export default DetailInput;