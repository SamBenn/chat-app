import logo from './logo.svg';
import React from 'react';
import './App.css';

import Thread from "./components/thread";
import Submission from "./components/submission";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-inner">
          <Thread />
          <Submission />
        </div>
      </div>
    );
  }
}

export default App;