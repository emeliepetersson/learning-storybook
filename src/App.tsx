import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'test',
	auth: {
		username: 'staging-tester',
		password: 'c3c3c3'
	},
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Accept-Language': 'sv'
	},
	withCredentials: true
});

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
