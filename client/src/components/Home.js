import React, { useEffect, useState } from "react";

import Group from "./Group"
import Login from "./Login"
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";
import NewGroupModal from "./NewGroupModal"

function Home({user, setUser, addGroup}){

    const [groups, setGroups] = useState([]);
    const [issueRequest] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    
    
     console.log(user)
   
    const group_elements = user.groups.map(g => {
        return (<Group key={g.id} group={g}/>)
      })

return (
    <>
    <img src={user.image} alt="Avatar" className="avatar" />
    <br></br>
    <br></br>
   
    <br></br>
    <div className="group-list">
    <h1>My Groups</h1>
    
    {group_elements}
    
    </div>
    <div>
    <div className="new-group-button">
    <Button className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        create new group</Button> 
    </div>
    {modalOpen && <NewGroupModal setOpenModal={setModalOpen} addGroup={addGroup}/>}
    </div>
    </>
)
}

export default Home;
