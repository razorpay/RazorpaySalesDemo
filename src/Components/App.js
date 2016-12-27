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
      visibleMerchant: merchants[1]
    };

    // Binding this to methods
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.updateVisibleMerchant = this.updateVisibleMerchant.bind(this);
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
      visibleMerchant: merchant
    });
  }

  render() {
    var appClasses = classNames({
      'App': true,
      'shrunk': this.state.isSidebarOpen
    });

    return (
      <div>
        <Sidebar
          open={this.state.isSidebarOpen}
          merchantData={merchants}
          updateVisibleMerchant={this.updateVisibleMerchant}/>

        <div className={appClasses} onClick={this.closeSidebar}>
          <PaymentModal data={this.state.visibleMerchant}/>
          <ButtonStart fireOnClick={this.toggleSidebar}/>
        </div>
      </div>
    );
  }
}

export default App;