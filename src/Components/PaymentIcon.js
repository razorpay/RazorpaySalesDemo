import React, {Component, PropTypes} from 'react';

class CardIcon extends Component {
  static PropTypes = {
    color: PropTypes.string,
    type: PropTypes.string
  }

  constructor(props) {
    super(props);

    // Bind 'this' to methods
    this.cardIcon = this.cardIcon.bind(this);
    this.netbankingIcon = this.netbankingIcon.bind(this);
    this.walletIcon = this.walletIcon.bind(this);
  }

  cardIcon() {
    return (
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M1,2.004947 L1,2.004947 L1,21.995053 C1,22.551013 1.447909,23 1.999707,23 L34.000292,23 C34.554948,23 35,22.552948 35,21.995053 L35,2.004947 C35,1.448987 34.55209,1 34.000292,1 L1.999707,1 C1.445051,1 1,1.447052 1,2.004947 L1,2.004947 L1,2.004947 Z M0,2.004947 C0,0.897645 0.889892,0 1.999707,0 L34.000292,0 C35.1047,0 36,0.897026 36,2.004947 L36,21.995053 C36,23.102355 35.110107,24 34.000292,24 L1.999707,24 C0.895299,24 0,23.102974 0,21.995053 L0,2.004947 L0,2.004947 Z M1,5 L35,5 L35,10 L1,10 L1,5 L1,5 Z M3,15 L16,15 L16,17 L3,17 L3,15 L3,15 Z M3,18 L11,18 L11,20 L3,20 L3,18 L3,18 Z" id="Shape" fill={this.props.color || "#F0604F"}></path>
      </g>
    );
  }

  netbankingIcon() {
    return (
      <g transform="translate(-215.000000, -124.000000)" fill={this.props.color || "#F0604F"}>
        <path d="M217.004538,146 L248.756705,146 L248.756705,147 L217.004538,147 L217.004538,146 Z M218.872312,144 L246.88893,144 L246.88893,145 L218.872312,145 L218.872312,144 Z M223.004538,134 L225.004538,134 L225.004538,142 L223.004538,142 L223.004538,134 Z M229.004538,134 L231.004538,134 L231.004538,142 L229.004538,142 L229.004538,134 Z M235.004538,134 L237.004538,134 L237.004538,142 L235.004538,142 L235.004538,134 Z M241.004538,134 L243.004538,134 L243.004538,142 L241.004538,142 L241.004538,134 Z M218.872312,131 L246.88893,131 L246.88893,132 L218.872312,132 L218.872312,131 Z M218.872312,128.6875 L232.880621,124 L246.88893,128.6875 L246.88893,129.625 L218.872312,129.625 L218.872312,128.6875 Z" id="Rectangle-88"></path>
      </g>
    );
  }

  walletIcon() {
    return(
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-2" fill={this.props.color || "#F0604F"}>
            <path d="M1,2.004947 L1,2.004947 L1,21.995053 C1,22.551013 1.44791,23 1.999707,23 L34.000293,23 C34.554949,23 35,22.552948 35,21.995053 L35,2.004947 C35,1.448987 34.55209,1 34.000293,1 L1.999707,1 C1.445051,1 1,1.447052 1,2.004947 L1,2.004947 L1,2.004947 Z M0,2.004947 C0,0.897645 0.889893,0 1.999707,0 L34.000293,0 C35.104701,0 36,0.897026 36,2.004947 L36,21.995053 C36,23.102355 35.110107,24 34.000293,24 L1.999707,24 C0.895299,24 0,23.102974 0,21.995053 L0,2.004947 L0,2.004947 Z M29,14.994081 C29,15.557164 29.442868,16 29.998101,16 L35,16 L35,17 L35,13.373327 L35,10 L35,11 L29.998101,11 C29.4432,11 29,11.446149 29,12.005919 L29,14.994081 L29,14.994081 Z M28,12.005919 C28,10.898081 28.775868,10 29.748339,10 L35,10 L35,13.373327 L35,17 L29.748339,17 C28.782758,17 28,16.113445 28,14.994081 L28,12.005919 L28,12.005919 Z M6,5.25 C6,4.559644 6.553418,4 7.246094,4 L35,4 L35,6.5 L7.246094,6.5 C6.557895,6.5 6,5.945169 6,5.25 L6,5.25 Z" id="Shape"></path>
        </g>
      </g>
    );
  }

  render() {
    var icon;

    switch(this.props.type) {
      case 'card':
        icon = this.cardIcon();
      break;
      case 'netbanking':
        icon = this.netbankingIcon();
      break;
      case 'wallet':
        icon = this.walletIcon();
      break;
      default:
        icon = this.cardIcon();
      break;
    }

    return (
     <svg width="36px" height="24px" viewBox="0 0 36 24">
      {icon}
    </svg>
    );
  }
}

export default CardIcon;