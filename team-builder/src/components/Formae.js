import React from 'react'
import { Button, Form, Label, Input} from 'reactstrap';

function Formae(props){
    const { values, update, submit } = props

    const onChange = (event) => {
        update([event.target.name], event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        submit()
    }

    return(
        <div>
        <Form onSubmit = {onSubmit}>
            <Label htmlFor = "fname">Name:</Label>
            <Input type = "text"
            name = "fname"
            id = "name"
            placeholder = "First Name"
            onChange={onChange}
            value = {values.fname}></Input>

            <Label htmlFor = "email">Email Address:</Label>
            <Input type = "email"
            name = "email"
            id = "email"
            placeholder = "email@emailaddress.com"
            onChange = {onChange}
            value = {values.email}></Input>

            <Label htmlFor = "role">Role:</Label>
            <Input type = "select" 
            name = "role"
            id = "role"
            onChange = {onChange}
            
            >
          <option value = "UI/UX">UI/UX</option>
          <option value = "Front End Designer">Front-End Designer</option>
          <option value = "Front End Architect">Front-End Architect</option>
          <option value = "Back-End Badass">Back-End Badass</option>
          <option value = "Project Lead">Project Lead</option>
            </Input>
            <br />
            <Button>Submit</Button>

        </Form>
        </div>
    )
}

export default Formae