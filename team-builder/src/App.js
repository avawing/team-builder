import React, {useState} from 'react';
import Formae from './components/Formae'
import TeamMembers from './components/teamMembers'
import './App.css';

function App() {

  const [members] = useState([{
    fname: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    fname: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    fname: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    fname: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    fname: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  }])

  const [member, setMember] = useState({
    fname: '',
    email:'',
    role: null
  })


  return (
    <div className="App">
      <header className="App-header">
        
        {members.map(item => {
         return <TeamMembers members = {item}/>
        })}
        
        <Formae setMember = {setMember} member = {member} members={members}/>
      </header>
    </div>
  );
}

export default App;
