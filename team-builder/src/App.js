import React, {useState} from 'react';
import Formae from './components/Formae'
import TeamMembers from './components/teamMembers'
import './App.css';

function App() {
  const [member, setMember] = useState([{
    name: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    name: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    name: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    name: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },
  {
    name: 'Ava',
    email: 'avelinewingfield.@gmail.com',
    role: 'Front-End Dev'
  },])


  return (
    <div className="App">
      <header className="App-header">
        {console.log(member)}
        {member.map(item => {
          return <TeamMembers members = {item}/>
        })}
        
        <Formae setMember = {setMember}/>
      </header>
    </div>
  );
}

export default App;
