import React, { Component } from 'react';
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

    setTimeout(() => {
      // this.openSidebar();
    }, 3000);

    // Binding this to methods
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  openSidebar() {
    this.setState({isSidebarOpen: true});
  }

  closeSidebar() {
    this.setState({isSidebarOpen: false});
  }

  render() {
    return (
      <div className="App">
        <Sidebar open={this.state.isSidebarOpen} merchantData={merchants}/>
        <PaymentModal/>
        <ButtonStart/>
      </div>
    );
  }
}

export default App;