import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "../styles";
import Modal from "./Modal"
import "./Modal.css"
function GroupPage({user, users}){
    const [group, setGroup] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory]= useState('All')

    const filteredUsers = users.filter((u) => {
            if (selectedCategory === 'All') {
                return true
            }
            else {
                return u.username === selectedCategory;
            }
        })
      .filter((u)=>{
        return u.username.toLowerCase().includes(search.toLowerCase());
    })

    

    function LoadGroup(id) {
      fetch(`/groups/${id}`)
        .then(r => r.json())
        .then(group => {
            console.log(group)
          setGroup(group);
        })
    }
  
    const data = useParams()
    console.log("params:",data)
    console.log("windows",window.location.pathname)
    useEffect(() => {
      LoadGroup(data.id);
    }, [data]);

// const usernames = group.users.map(user => <li> {user.username} </li>)

return (
    <>
    <h1>{group.name}</h1>
    <h4>Members:</h4>
    {/* {usernames} */}
<div>
    <div className="new-group-button">
    <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        add new member
      </button>
      </div>
    {modalOpen && <Modal setOpenModal={setModalOpen} users={users} filteredUsers={filteredUsers} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} search={search} setSearch={setSearch}/>}
    </div>
    </>
)
}


export default GroupPage;