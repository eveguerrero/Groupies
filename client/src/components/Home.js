import React, { useEffect, useState } from "react";

import Group from "./Group"
import Login from "./Login"
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";

function Home({user, setUser}){

    const [groups, setGroups] = useState([]);
    const [issueRequest] = useState(false)
    
    // function loadsGroups(){
    //     fetch("/groups")
    //       .then(r => r.json())
    //       .then(groups => {
    //         setGroups(groups)
    //         console.log(groups)
    //       })
    //   }
    
    //   useEffect(() => {
    //     loadsGroups()
    //   }, [issueRequest])
    
    //  const userGroups = groups.filter(group => group.users.username === user.username)
    //  console.log(userGroups)
     
   
    const group_elements = user.groups.map(group => {
        return (<Group key={group.id} group={group}/>)
      })

return (
    <>
    <img src={user.image} alt="Avatar" className="avatar" />
    <br></br>
    <br></br>
    <div className="new-group-button">
    <Button as={Link} to="/" exact>create new group</Button> 
    </div>
    <br></br>
    <div className="group-list">
    <h1>My Groups</h1>
    
    {group_elements}
    
    </div>
    </>
)
}

export default Home;
