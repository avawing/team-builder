import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function form(props){
    const {setMember} = props;
    return(
        <Form>
            <Label htmlFor = "name">Name:</Label>
            <Input type = "text"
            name = "name"
            id = "name"
            placeholder = "First Name"></Input>

            <Label htmlFor = "email">Email Address:</Label>
            <Input type = "email"
            name = "email"
            id = "email"
            placeholder = "email@emailaddress.com"></Input>

            <Label htmlFor = "role">Role:</Label>
            <Input type = "select" 
            name = "role"
            id = "role"
            >
          <option>UI/UX</option>
          <option>Front-End Designer</option>
          <option>Front-End Architect</option>
          <option>Back-End Badass</option>
          <option>Project Lead</option>
            </Input>

        </Form>
    )
}

export default form