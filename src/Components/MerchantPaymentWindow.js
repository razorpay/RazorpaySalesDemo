import React, {Component} from 'react';

class MerchantPaymentWindow extends Component {
  render() {
    return (
      <div className="backdropContainer">
        <div
          style={{
            backgroundImage: `url(${this.props.browserPreview})`
          }}
          className="merchantPaymentWindow fadeInUp">
        </div>
      </div>
    );
  }
}

export default MerchantPaymentWindow;