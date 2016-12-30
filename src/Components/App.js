import React, { Component } from 'react';
import classNames from 'classnames';

// Components
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonPrimary from './ButtonPrimary';
import PaymentButtons from './PaymentButtons';
import MerchantPaymentWidow from './MerchantPaymentWindow';
import ConditionalComp from './ConditionalComp';

// Dummy Data
var merchants = [
  {
    id: 0,
    name: 'Akbar Travels',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #223',
    amount: 7000,
    color: '#1ABC9C'
  },
  {
    id: 1,
    name: 'Nestaway',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #421',
    amount: 699,
    color: '#9681A0'
  },
  {
    id: 2,
    name: 'Chaipoint',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #314',
    amount: 341,
    color: '#7A73AF'
  },
  {
    id: 3,
    name: 'Rentomojo',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #222',
    amount: 3.1415,
    color: '#F0DB4F'
  },
  {
    id: 4,
    name: 'Voonik',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 1,
    color: '#A4C639'
  },
  {
    id: 5,
    name: 'PapaJohns',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 800,
    color: '#6ADCFB'
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    // The steps demo consists of
    this.demoSteps = {
      0: () => {
        this.endDemo();
        this.setState({
          demoStep: 0
        });
      },
      1: () => {
        this.setState({
          paymentModalContent: 'contact-form',
          demoStep: 1
        });
      },
      2: () => {
        this.setState({
          demoStep: 2
        });
      }
    };

    this.state = {
      isSidebarOpen: true,
      demoMode: false,
      demoStep: 0,
      // Merchant data currently visible in the modal
      currentMerchantId: merchants[0].id,
      currentMerchantName: merchants[0].name,
      currentPaymentDesc: merchants[0].desc,
      currentAmount: merchants[0].amount,
      currentMerchantLogo: merchants[0].logo,
      currentMerchantColor: merchants[0].color,
      // Content visible in payment modal (contact or card payment)
      paymentModalContent: 'contact-form'
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
    this.payUsingCard = this.payUsingCard.bind(this);
    this.beginDemo = this.beginDemo.bind(this);
    this.endDemo = this.endDemo.bind(this);
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
      currentMerchantId: newMerchant.id,
      currentMerchantColor: newMerchant.color,
      currentMerchantName: newMerchant.name,
      currentPaymentDesc: newMerchant.desc,
      currentAmount: newMerchant.amount,
      currentMerchantLogo: newMerchant.logo,
    });
  }

  /*
  * Function: beginDemo
  * -----------------------
  * Starts demoing animation.
  */
  beginDemo() {
    this.closeSidebar();
    setTimeout(() => {
      this.setState({
        demoMode: true,
        demoStep: 1
      });
    }, 500);
  }

 /*
  * Function: beginDemo
  * -----------------------
  * Stops demoing animation.
  */
  endDemo() {
    this.setState({
      demoMode: false,
      paymentModalContent: 'contact-form'
    });
    setTimeout(() => {
      this.openSidebar();
    }, 500);
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

  /*
  * Function: payUsingCard
  * -------------------------
  * Switches the content in the Modal to 
  * pay using card mode.
  */
  payUsingCard() {
    this.setState({
      paymentModalContent: 'card-payment',
      demoStep: 2
    });
  }

  render() {
    var appClasses = classNames({
      'App': true,
      'playingDemo-s1': this.state.demoMode,
      'shrunk': this.state.isSidebarOpen
    });

    var buttonText = this.state.isSidebarOpen ? 'done' : 'configure';

    var {currentMerchantId,
        currentMerchantName,
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

        <div className={appClasses}>
          <ConditionalComp visible={this.state.demoMode}>
            <ButtonPrimary
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: 0.8
              }}
              text="&#9664;"
              id="btnStepBackDemo"
              fireOnClick={this.demoSteps[this.state.demoStep - 1]}/>
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode}>
            <ButtonPrimary
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: 0.8
              }}
              text="&#x21E6;"
              id="btnEndDemo"
              fireOnClick={this.endDemo}/>
          </ConditionalComp>

          <PaymentModal
            content={this.state.paymentModalContent}
            id={currentMerchantId}
            name={currentMerchantName}
            desc={currentPaymentDesc}
            amount={currentAmount}
            logo={currentMerchantLogo}
            color={currentMerchantColor}
          />

          <ConditionalComp visible={!this.state.demoMode}>
            <ButtonPrimary
              id="btnStartDemo"
              className="buttonPrimary fadeIn"
              text="Begin Demo"
              fireOnClick={this.beginDemo}/>
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode && this.state.demoStep === 1}>
            <PaymentButtons
              payUsingCard={this.payUsingCard}
            />
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode}>
            <MerchantPaymentWidow />
          </ConditionalComp>
        </div>
      </div>
    );
  }
}

export default App;