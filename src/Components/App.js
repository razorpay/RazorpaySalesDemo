import React, { Component } from 'react';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonStart from './ButtonStart';

var merchants = [
  {
    name: 'Akbar Travels',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 700
  },
  {
    name: 'Nestaway',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 700
  },
  {
    name: 'Chaipoint',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 700
  },
  {
    name: 'Rentomojo',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #222',
    amount: 700
  },
  {
    name: 'Voonik',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 700
  },
  {
    name: 'PapaJohns',
    logo: 'http://images.google.com/funny/whatevs',
    desc: 'Payment #221',
    amount: 700
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    };

    // Binding this to methods
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
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

  render() {
    var appClasses = classNames({
      'App': true,
      'shrunk': this.state.isSidebarOpen
    });

    return (
      <div>
        <Sidebar open={this.state.isSidebarOpen} merchantData={merchants}/>
        <div className={appClasses} onClick={this.closeSidebar}>
          <PaymentModal data={merchants[0]}/>
          <ButtonStart fireOnClick={this.toggleSidebar}/>
        </div>
      </div>
    );
  }
}

export default App;