import React from 'react'

function teamMembers(props){
    const {members} = props

    return(
        <>
        <h1>{members.fname}</h1>
        <h2>{members.email}</h2>
        <h3>{members.role}</h3>
        </>
    )
}

export default teamMembers