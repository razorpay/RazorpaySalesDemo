import React, { Component } from 'react';
import classNames from 'classnames';

// Components
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonStart from './ButtonStart';

// Dummy Data
var merchants = [
  {
    name: 'Akbar Travels',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #223',
    amount: 7000,
    color: '#1ABC9C'
  },
  {
    name: 'Nestaway',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #421',
    amount: 699,
    color: '#9681A0'
  },
  {
    name: 'Chaipoint',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #314',
    amount: 341,
    color: '#7A73AF'
  },
  {
    name: 'Rentomojo',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #222',
    amount: 3.1415,
    color: '#F0DB4F'
  },
  {
    name: 'Voonik',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 1,
    color: '#A4C639'
  },
  {
    name: 'PapaJohns',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 800,
    color: '#6ADCFB'
  },
  {
    name: 'Lassi Shop',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 800,
    color: '#6BDCFF'
  },
  {
    name: 'Cool Lassi Burger',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 800,
    color: '#5ADDFB'
  },
  {
    name: 'Tadka Singh',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 798,
    color: '#5ADDFB'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      // Merchant data currently visible in the modal
      currentMerchantName: merchants[0].name,
      currentPaymentDesc: merchants[0].desc,
      currentAmount: merchants[0].amount,
      currentMerchantLogo: merchants[0].logo,
      currentMerchantColor: merchants[0].color
    };

    // Binding 'this' to methods
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.updateCurrentMerchant = this.updateCurrentMerchant.bind(this);
    this.updateCurrentMerchantName = this.updateCurrentMerchantName.bind(this);
    this.updateCurrentPaymentDesc = this.updateCurrentPaymentDesc.bind(this);
    this.updateCurrentAmount = this.updateCurrentAmount.bind(this);
    this.updateCurrentMerchantColor= this.updateCurrentMerchantColor.bind(this);

  }

  /*
  * Function: toggleSidebar
  * ----------------------------------
  * Toggles visibility of the sidebar.
  */
  toggleSidebar(e) {
    e.stopPropagation();
    if(!this.state.isSidebarOpen)
      this.openSidebar();
    else
      this.closeSidebar();
  }

  /*
  * Function: openSidebar
  * ---------------------
  * Slides Sidebar in.
  */
  openSidebar() {
    this.setState({isSidebarOpen: true});
  }

  /*
  * Function: closeSidebar
  * ----------------------
  * Slides Sidebar out.
  */
  closeSidebar() {
    this.setState({isSidebarOpen: false});
  }

  /*
  * Function: updateCurrentMerchant(object holding new merchant's data)
  * -------------------------------------------------------------------
  * Updates the data visible in the Payment modal to the data passed in
  * as param to this function.
  */
  updateCurrentMerchant(newMerchant) {
    this.setState({
      currentMerchantColor: newMerchant.color,
      currentMerchantName: newMerchant.name,
      currentPaymentDesc: newMerchant.desc,
      currentAmount: newMerchant.amount,
      currentMerchantLogo: newMerchant.logo,
    });
  }


  /*
  * The following four functions (updateCurrentMerchantName, updatePaymentDesc,
  * updateCurrentAmount, updateCurrentMerchantColor) are propagated to
  * Sidebar > MerchantDetail. Inputs detected inside MerchantDetail updates the details
  * in Payment Modal in real time.
  */

  /*
  * Function: updateCurrentMerchantName(keyboard event fired on input field)
  * ------------------------------------------------------------------------
  * Updates the name of the merchant in the Payment Modal.
  *
  */
  updateCurrentMerchantName(e) {
    this.setState({
      currentMerchantName: e.target.value
    });
  }

 /*
  * function: updateCurrentPaymentDesc(keyboard event fired on input field)
  * ------------------------------------------------------------------------
  * Updates the payment description in the Payment Modal.
  *
  */
  updateCurrentPaymentDesc(e) {
    this.setState({
      currentPaymentDesc: e.target.value
    });
  }

 /*
  * function: updateCurrentAmount(keyboard event fired on input field)
  * ------------------------------------------------------------------------
  * Updates the amount in the Payment Modal.
  */
  updateCurrentAmount(e) {
    this.setState({
      currentAmount: e.target.value
    });
  }

 /*
  * function: updateCurrentMerchantColor
  * ----------------------------------------
  * Updates the colors inside payment modal.
  */
  updateCurrentMerchantColor(color) {
    this.setState({
      currentMerchantColor: color.hex
    });
  }

  render() {
    var appClasses = classNames({
      'App': true,
      'shrunk': this.state.isSidebarOpen
    });

    var buttonText = this.state.isSidebarOpen ? 'done' : 'configure';

    var {currentMerchantName,
        currentPaymentDesc,
        currentAmount,
        currentMerchantLogo,
        currentMerchantColor} = this.state;

    return (
      /*
        For realtime current change of PaymentModal
        we pass currentMerchantColor to <Sidebar/> as a separate prop
      */

      <div>
        <Sidebar
          currentMerchantColor={currentMerchantColor}
          open={this.state.isSidebarOpen}
          merchants={merchants}
          updateCurrentMerchant={this.updateCurrentMerchant}
          updateName={this.updateCurrentMerchantName}
          updateDesc={this.updateCurrentPaymentDesc}
          updateAmount={this.updateCurrentAmount}
          updateColor={this.updateCurrentMerchantColor}
        />

        <div className={appClasses} onClick={this.closeSidebar}>
          <PaymentModal
            name={currentMerchantName}
            desc={currentPaymentDesc}
            amount={currentAmount}
            logo={currentMerchantLogo}
            color={currentMerchantColor}
          />
          <ButtonStart text={buttonText} fireOnClick={this.toggleSidebar}/>
        </div>
      </div>
    );
  }
}

export default App;