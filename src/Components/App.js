import React, { Component } from 'react';
import classNames from 'classnames';

// Components
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonPrimary from './ButtonPrimary';
import PaymentButtons from './PaymentButtons';
import ConditionalComp from './ConditionalComp';

class App extends Component {
  constructor(props) {
    super(props);

    this.merchants = [];

    this.state = {
      isSidebarOpen: true,
      demoMode: false,
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
    this.beginDemo = this.beginDemo.bind(this);
    this.endDemo = this.endDemo.bind(this);
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
      this.setState({demoMode: true});
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
          merchants={this.merchants}
          updateCurrentMerchant={this.updateCurrentMerchant}
          updateName={this.updateCurrentMerchantName}
          updateDesc={this.updateCurrentPaymentDesc}
          updateAmount={this.updateCurrentAmount}
          updateColor={this.updateCurrentMerchantColor}
      />

        <div className={appClasses}>
          <ButtonPrimary
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              opacity: 0.8
            }}
            text="restart"
            id="btnEndDemo"
            fireOnClick={this.endDemo}/>

          <ConditionalComp visible={this.merchants.length > 0}>
            <PaymentModal
              id={currentMerchantId}
              name={currentMerchantName}
              desc={currentPaymentDesc}
              amount={currentAmount}
              logo={currentMerchantLogo}
              color={currentMerchantColor}
            />
          </ConditionalComp>

          <ConditionalComp visible={!this.props.demoMode}>
            <ButtonPrimary
              id="btnStartDemo"
              className="buttonPrimary fadeIn"
              text={this.merchants.length > 0 ? "Begin Demo" : "Loading..."}
              fireOnClick={this.beginDemo}/>
          </ConditionalComp>

          <ConditionalComp visible={this.state.demoMode}>
            <PaymentButtons/>
          </ConditionalComp>
        </div>
      </div>
    );
  }
}

export default App;