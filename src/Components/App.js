import React, { Component } from 'react';
import classNames from 'classnames';

// Components
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonPrimary from './ButtonPrimary';
import PaymentButtons from './PaymentButtons';
import MerchantPaymentWidow from './MerchantPaymentWindow';
import Foreground from './Foreground';
import ConditionalComp from './ConditionalComp';

class App extends Component {
  constructor(props) {
    super(props);

    // Stores all merchant data after fetched from JSON
    this.merchants = [];
    // Stores setTimeouts, makes it easier to clear them
    this.animationTimeouts = [];

    // The steps demo consists of
    this.demoSteps = {
      0: () => {
        // Remove all the classes
        this.refs.app.classList.remove('f-anim-s1', 'f-anim-s2', 'f-anim-s3', 'f-anim-s4');
        // Clear all the timeouts
        this.animationTimeouts.forEach(timeout => clearTimeout(timeout));
        this.animationTimeouts.push(setTimeout(() =>  {
          this.openSidebar();
        }, 500));

        this.setState({
          paymentModalContent: 'contact-form',
          demoMode: false,
          demoStep: 0
        });
      },
      1: () => {
        this.closeSidebar();
        this.setState({
          paymentModalContent: 'contact-form',
          demoMode: true,
          demoStep: 1
        });
      },
      2: () => {
        this.refs.app.classList.remove('f-anim-s1');
        this.setState({
          // STORE 'card-payment' PAYMENT METHOD DYNAMICALLY
          paymentModalContent: 'card-payment',
          demoStep: 2
        });
      },
      // Steps involving final-animation (f-anim)
      3: () => {
        this.refs.app.classList.add('f-anim-s1');
        this.refs.app.classList.remove('f-anim-s2');
        this.setState({
          paymentModalContent: 'processing-payment',
          demoStep: 3
        });
      },
      4: () => {
        this.refs.app.classList.add('f-anim-s2');
        this.refs.app.classList.remove('f-anim-s3');
        this.refs.app.classList.remove('f-anim-s4');
        this.setState({
          demoStep: 4
        });
      },
      5: () => {
        this.refs.app.classList.add('f-anim-s3');
        this.refs.app.classList.remove('f-anim-s4');
        this.setState({
          demoStep: 5
        });
      },
      6: () => {
        this.refs.app.classList.add('f-anim-s4');
        this.setState({
          demoStep: 6
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
    this.stepDemoForward = this.stepDemoForward.bind(this);
    this.stepDemoBackward = this.stepDemoBackward.bind(this);
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
  * Function: beginDemo
  * -------------------------------------------
  * Puts app in demo mode.
  * Fired after clicking the 'Begin Demo' button.
  */
  beginDemo() {
    this.closeSidebar();
    this.refs.app.classList.add('booty');
    this.animationTimeouts.push(setTimeout(()=>{
      this.refs.app.classList.add('f-anim-s0');
      this.demoSteps[1]();
    }, 500));
 }

 /*
  * Function: beginDemo
  * -----------------------
  * Stops demoing animation.
  */
  endDemo() {
    this.demoSteps[0]();
  }

  /*
  * Function: stepDemoForward
  * --------------------------
  * Steps demo one step forward.
  */
  stepDemoForward() {
    var {demoStep} = this.state;
    if(demoStep !== Object.keys(this.demoSteps).length - 1)
      this.demoSteps[demoStep + 1]();
  }

  /*
  * Function: stepDemoBackward
  * --------------------------
  * Steps demo one step backward.
  */
  stepDemoBackward() {
    var {demoStep} = this.state;
    if(demoStep > 0)
      this.demoSteps[demoStep - 1]();
  }

    /*
  * Function: beginPaymentAnimation
  * ----------------------------------------
  * Fires after clicking 'Pay Amount' button.
  */
  beginPaymentAnimation() {
    // 3d tilt with processing payment content
    this.demoSteps[3]();
    // Master card window pops in
    this.animationTimeouts.push(setTimeout(this.demoSteps[4], 1500));
    // Master card window pops out, confirmation dialog pops in
    this.animationTimeouts.push(setTimeout(this.demoSteps[5], 3500));
    // 3d tilt ends
    this.animationTimeouts.push(setTimeout(this.demoSteps[6], 5500));
 }

  /*
  * Function: payUsingCard
  * -------------------------
  * Switches the content in the Modal to
  * pay using card mode.
  */
  payUsingCard() {
    this.state.demoMode && this.demoSteps[2]();
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

          {/*<ConditionalComp visible={this.state.demoMode}/>*/}
          <ConditionalComp visible={this.state.demoMode && this.state.demoStep <= 2}>
            <ButtonPrimary
              id="btnStepDemoBack"
              fireOnClick={this.stepDemoBackward}/>
          </ConditionalComp>

          {/*<ConditionalComp visible={this.state.demoMode && this.state.demoStep >= 2}>*/}
          <ConditionalComp visible={this.state.demoMode && this.state.demoStep >= 2 && false}>
            <ButtonPrimary
              id="btnStepDemoForward"
              fireOnClick={this.stepDemoForward}/>
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode}>
            <ButtonPrimary
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
              payUsingCard={this.payUsingCard}
            />
          </ConditionalComp>

          <ConditionalComp visible={!this.state.demoMode}>
            <ButtonPrimary
              id="btnStartDemo"
              className="buttonPrimary fadeIn"
              text={this.merchants.length > 0 ? "Begin Demo" : "Loading..."}
              fireOnClick={this.beginDemo}/>
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode && this.state.demoStep === 1 && false}>
            <PaymentButtons
              payUsingCard={this.payUsingCard}
            />
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode}>
            <MerchantPaymentWidow />
          </ConditionalComp>

          <Foreground
            amount={currentAmount}
            desc={currentPaymentDesc}
          />

        </div>
      </div>
    );
  }
}

export default App;