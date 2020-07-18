import React, {useState} from 'react';
import logo from './logo.svg';
import form from './components/form'
import './App.css';

function App() {
  const [member, setMember] = useState([{
    name: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form setMember = {setMember}/>
      </header>
    </div>
  );
}

export default App;
