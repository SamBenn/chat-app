import logo from './logo.svg';
import React from 'react';
import './App.css';

import Thread from "./components/thread";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-inner">
          <Thread />
        </div>
      </div>
    );
  }
}

export default App;