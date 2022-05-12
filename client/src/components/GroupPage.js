import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "../styles";
import Modal from "./Modal"
import "./Modal.css"
import MembersList from "./MembersList"
import PostEventModal from "./PostEventModal"
import CalendarItem from "./CalendarItem"
import EventItem from "./EventItem"

function GroupPage({user, users, events, setEvents, addMember}){
    const [group, setGroup] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory]= useState('All')
    const [memberModalOpen, setMemberModalOpen] = useState(false)
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
   const usersList = group.users
    const data = useParams()
    // console.log("params:",data)
    // console.log("windows",window.location.pathname)
    const eventsList = group.events
    console.log(eventsList)
    console.log(group)
    useEffect(() => {
      LoadGroup(data.id);
    }, [data]);

// const usernames = group.users.map(user => <li> {user.username} </li>)

return (
    <>
    <h1>{group.name}</h1>
    <h4>Members:</h4>
    
    { usersList && group.users.map(u => <ul key={u.id}> {u.username} </ul>)}
    

<div className="events">
  <h2>Events</h2>

</div>
<div>
    <div className="new-group-button">
    <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        PostEvent
      </button>
      <br></br>
      <br></br>
      </div>
    {modalOpen && <PostEventModal setOpenModal={setModalOpen} users={users} filteredUsers={filteredUsers} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} search={search} setSearch={setSearch} group={group} events={events} setEvents={setEvents}/>}
    
   
    </div>
    <br></br>
    
   
    <div>
    <div>
    <div className="">
    <button
        className="openModalBtn"
        onClick={() => {
          setMemberModalOpen(true);
        }}
      >
        add new member
      </button>
      <br></br>
      <br></br>
      <button className="post-button-link"><Link to="/posts-page" exact>Posts</Link></button>
      <br></br>
      <br></br>
      <button className="calendar-button-link"><Link to="/calendar" exact>Calendar</Link></button>
      </div>
    {memberModalOpen && <Modal setMemberModalOpen={setMemberModalOpen} users={users} filteredUsers={filteredUsers} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} search={search} setSearch={setSearch} group={group} addMember={addMember}/>}
    
   
    </div>
    </div>
    <div className='events-lists'>
    {eventsList && group.events.map(e => {
        return (<EventItem key={e.id} event={e}/>)
      })
}
    </div>
    </>
)
}


export default GroupPage;