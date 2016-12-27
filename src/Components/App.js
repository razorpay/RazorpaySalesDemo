import React, { Component } from 'react';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonStart from './ButtonStart';

var merchants = [
  {
    name: 'Akbar Travels',
    image: 'http://images.google.com/funny/whatevs'
  },
  {
    name: 'Nestaway',
    image: 'http://images.google.com/funny/whatevs'
  },
  {
    name: 'Chaipoint',
    image: 'http://images.google.com/funny/whatevs'
  },
  {
    name: 'Rentomojo',
    image: 'http://images.google.com/funny/whatevs'
  },
  {
    name: 'Voonik',
    image: 'http://images.google.com/funny/whatevs'
  },
  {
    name: 'PapaJohns',
    image: 'http://images.google.com/funny/whatevs'
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

  toggleSidebar() {
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
        <div className={appClasses}>
          <PaymentModal/>
          <ButtonStart fireOnClick={this.toggleSidebar}/>
        </div>
      </div>
    );
  }
}

export default App;