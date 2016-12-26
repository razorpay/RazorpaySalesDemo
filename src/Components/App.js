import React, { Component } from 'react';
import Sidebar from './Sidebar';
import PaymentModal from './PaymentModal';
import ButtonStart from './ButtonStart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar open={false}/>
        <PaymentModal/>
        <ButtonStart/>
      </div>
    );
  }
}

export default App;