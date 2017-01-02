import React, { Component } from 'react';
import classNames from 'classnames';

// Components
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonPrimary from './ButtonPrimary';
import PaymentButtons from './PaymentButtons';
import MerchantPaymentWidow from './MerchantPaymentWindow';
import ConditionalComp from './ConditionalComp';

class App extends Component {
  constructor(props) {
    super(props);

    this.merchants = [];

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
      paymentModalContent: 'contact-form'
    };

    // Binding 'this' to methods
    this.fetchMerchantData = this.fetchMerchantData.bind(this);
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
    this.beginPaymentAnimation = this.beginPaymentAnimation.bind(this);
  }

  componentWillMount() {
    this.fetchMerchantData();
  }

  /*
  * Function: fetchMerchantData
  * -----------------------------------
  * Fetches and stores data from inside public/data.json
  * and stores in the data state variable.
  */
  fetchMerchantData() {
    var url = './data.json';
    fetch(url)
      .then(response=> response.json())
      .then(jsonData => {
        this.merchants = jsonData;
        var currentMerchant = this.merchants[0];
        this.setState({
          currentMerchantId: currentMerchant.id,
          currentMerchantName: currentMerchant.name,
          currentPaymentDesc: currentMerchant.desc,
          currentAmount: currentMerchant.amount,
          currentMerchantLogo: currentMerchant.logo,
          currentMerchantColor: currentMerchant.color
        });
      })
      .catch(error => console.log('JSON fetch error: ' + error));
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
  * Function: beginPaymentAnimation
  * --------------------------------
  * Starts the 3d modal popping animation
  */
  beginPaymentAnimation() {
    var app = this.refs.app;

    this.setState({
      paymentModalContent: 'processing-payment'
    });

    app.classList.add('f-anim-s1');
    setTimeout(()=> {
      app.classList.add('f-anim-s2');
    }, 1500);

    setTimeout(()=>{
      app.classList.add('f-anim-s3');
    }, 3500);

    setTimeout(() => {
      app.classList.add('f-anim-s4');
    }, 5500);
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
        For realtime color change of PaymentModal
        we pass currentMerchantColor to <Sidebar/> as a separate prop
      */

      <div>
        <Sidebar
          currentMerchantColor={currentMerchantColor}
          open={this.state.isSidebarOpen}
          merchants={this.merchants}
          updateCurrentMerchant={this.updateCurrentMerchant}
          updateName={this.updateCurrentMerchantName}
          updateDesc={this.updateCurrentPaymentDesc}
          updateAmount={this.updateCurrentAmount}
          updateColor={this.updateCurrentMerchantColor}
      />

        <div className={appClasses} ref="app">
          <ConditionalComp visible={this.state.demoMode}>
            <ButtonPrimary
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: 0.8,
                zIndex: 9999
              }}
              text="&#9664;"
              id="btnStepBackDemo"
              fireOnClick={this.demoSteps[this.state.demoStep - 1]}/>
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode}>
            <ButtonPrimary
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: 0.8,
                zIndex: 9999
              }}
              text="&#x21E6;"
              id="btnEndDemo"
              fireOnClick={this.endDemo}/>
          </ConditionalComp>

          <ConditionalComp visible={this.merchants.length > 0}>
            <PaymentModal
              beginPaymentAnimation={this.beginPaymentAnimation}
              content={this.state.paymentModalContent}
              id={currentMerchantId}
              name={currentMerchantName}
              desc={currentPaymentDesc}
              amount={currentAmount}
              logo={currentMerchantLogo}
              color={currentMerchantColor}
            />
          </ConditionalComp>

          <ConditionalComp visible={!this.state.demoMode}>
            <ButtonPrimary
              id="btnStartDemo"
              className="buttonPrimary fadeIn"
              text={this.merchants.length > 0 ? "Begin Demo" : "Loading..."}
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

          <div className="masterCardContainer" ref="masterCardContainer">
            <div className="masterCardWindow" ref="masterCardWindow">
            </div>
            <div className="paymentConfirmationWindow">
              <h1>Thanks for your order!</h1>
              <div className="row">
                <div className="left-col">
                  Amount
                </div>
                <div className="right-col">
                  ₹{currentAmount}
                </div>
              </div>

              <div className="row">
                <div className="left-col">
                  Date
                </div>
                <div className="right-col">
                  20.09.2016 18:02
                </div>
              </div>

            <div className="row">
                <div className="left-col">
                  Transaction ID
                </div>
                <div className="right-col">
                  pay_38UehrY839Je4kK
                </div>
            </div>

            <div className="row">
                <div className="left-col">
                  Item
                </div>
                <div className="right-col">
                  Payment #221
                </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;