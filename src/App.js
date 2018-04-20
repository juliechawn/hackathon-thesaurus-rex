import React from 'react';
import './style.css';

import Header from './components/Header';

import Text from './components/Text';


class App extends React.Component {

  render() {
    return (
      <div className="app">     
          <Header />
          <Text />
      </div>    
    );
  }
}

export default App;