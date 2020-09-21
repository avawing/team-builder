import React, {useState, useEffect} from 'react';
import Formae from './components/Formae'
import TeamMembers from './components/teamMembers'
import { v4 as uuid } from 'uuid'
import './App.css';


const initialFormValues = {
  fname: '',
  email:'',
  id: uuid(),
  role: null
}

const membersList = [{
  fname: 'Ava',
  email: 'avelinewingfield.@gmail.com',
  role: 'Front-End Dev',
  id: uuid()
},
{
  fname: 'Bob',
  email: 'Bob@gmail.com',
  role: 'UI/UX',
  id: uuid()
},
{
  fname: 'Ben',
  email: 'Ben@gmail.com',
  role: 'Back-End',
  id: uuid()
}]

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: membersList })
}
const fakeAxiosPost = (url, { fname, email, role }) => {
  const newMember = { id: uuid(), fname, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

export default function App() {

  const [member, setMember] = useState([membersList])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    const updatedFormValues = {...formValues, [inputName]:inputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm = () =>{

    const newMember = {
      fname: formValues.fname.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: uuid()
    }
    
    if(!newMember.fname || !newMember.email || !newMember.role) return
    
    fakeAxiosPost('fakeapi.com', newMember)
    .then(res => {
      const memberFromAPI = res.data
      setMember(member => [memberFromAPI, ...member])
      setFormValues(initialFormValues)
    })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setMember(res.data))
  }, [])




  return (
    <div className="App">
      <header className="App-header">
        
        {member.map(item => {
         return <TeamMembers key = {item.id} members = {item}/>
        })}
        
        <Formae values = {formValues} update ={updateForm} submit = {submitForm}/>
      </header>
    </div>
  );
}