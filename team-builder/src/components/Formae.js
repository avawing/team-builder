import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Formae(props){
    const {members, setMember, member} = props;

    const changeHandler = (event) => {
        setMember({
            ...member,
            [event.target.name]:event.target.value
        })
    }

    return(
        <div>
        <Form onSubmit = {event => {
            event.preventDefault()
            members.push(member)
            console.log(members)
        }}>
            <Label htmlFor = "fname">Name:</Label>
            <Input type = "text"
            name = "fname"
            id = "name"
            placeholder = "First Name"
            onChange={changeHandler}></Input>

            <Label htmlFor = "email">Email Address:</Label>
            <Input type = "email"
            name = "email"
            id = "email"
            placeholder = "email@emailaddress.com"
            onChange = {changeHandler}></Input>

            <Label htmlFor = "role">Role:</Label>
            <Input type = "select" 
            name = "role"
            id = "role"
            onChange = {changeHandler}
            >
          <option>UI/UX</option>
          <option>Front-End Designer</option>
          <option>Front-End Architect</option>
          <option>Back-End Badass</option>
          <option>Project Lead</option>
            </Input>
            <br />
            <Button>Submit</Button>

        </Form>
        </div>
    )
}

export default Formae