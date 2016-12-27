import React, { Component } from 'react';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonStart from './ButtonStart';

var merchants = [
  {
    name: 'Akbar Travels',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #223',
    amount: 7000
  },
  {
    name: 'Nestaway',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #421',
    amount: 699
  },
  {
    name: 'Chaipoint',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #314',
    amount: 341
  },
  {
    name: 'Rentomojo',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #222',
    amount: 3.1415
  },
  {
    name: 'Voonik',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 1
  },
  {
    name: 'PapaJohns',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 800
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      // Data that is visible in the modal currently
      currentMerchantName: merchants[0].name,
      currentPaymentDesc: merchants[0].desc,
      currentAmount: merchants[0].amount,
      currentMerchantLogo: merchants[0].logo
    };

    // Binding this to methods
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.updateVisibleMerchant = this.updateVisibleMerchant.bind(this);
    this.updateCurrentMerchantName = this.updateCurrentMerchantName.bind(this);
    this.updateCurrentPaymentDesc = this.updateCurrentPaymentDesc.bind(this);
    this.updateCurrentAmount = this.updateCurrentAmount.bind(this);

  }

  toggleSidebar(e) {
    e.stopPropagation();
    if(!this.state.isSidebarOpen)
      this.openSidebar();
    else
      this.closeSidebar();
  }

  openSidebar() {
    this.setState({isSidebarOpen: true});
  }

  closeSidebar() {
    this.setState({isSidebarOpen: false});
  }

  updateVisibleMerchant(merchant) {
    this.setState({
      currentMerchantName: merchant.name,
      currentPaymentDesc: merchant.desc,
      currentAmount: merchant.amount,
      currentMerchantLogo: merchant.logo
    });
  }

  updateCurrentMerchantName(e) {
    this.setState({
      currentMerchantName: e.target.value
    });
  }

  updateCurrentPaymentDesc(e) {
    this.setState({
      currentPaymentDesc: e.target.value
    });
  }

  updateCurrentAmount(e) {
    this.setState({
      currentAmount: e.target.value
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
        currentMerchantLogo} = this.state;

    return (
      <div>
        <Sidebar
          open={this.state.isSidebarOpen}
          merchantData={merchants}
          updateVisibleMerchant={this.updateVisibleMerchant}
          updateName={this.updateCurrentMerchantName}
          updateDesc={this.updateCurrentPaymentDesc}
          updateAmount={this.updateCurrentAmount}
        />

        <div className={appClasses} onClick={this.closeSidebar}>
          <PaymentModal
            name={currentMerchantName}
            desc={currentPaymentDesc}
            amount={currentAmount}
            logo={currentMerchantLogo}
          />
          <ButtonStart text={buttonText} fireOnClick={this.toggleSidebar}/>
        </div>
      </div>
    );
  }
}

export default App;