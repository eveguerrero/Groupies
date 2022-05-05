import React, { useState } from "react";
import "./Modal.css"
function NewGroupModal ({ setOpenModal, addGroup }){
    const [name, setName] = useState("")
// New group name
function handleNewGroup(e) {
  e.preventDefault()
  const newGroup = {
    name: name,
  }

  fetch(`/groups`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newGroup)
  });

  setName('');
  addGroup(newGroup);
}
    
return (
    
     <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div>

<form onSubmit={handleNewGroup} 
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "auto",
        }}>
          <label htmlFor="topName">Group Name</label>
          <input 
          type="name" 
          id="name" value={name} 
          onChange={(e) => setName(e.target.value)}/>
  
  <div className="footer">
        <button>Submit</button>
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> */}
          
        </div>
           
        </form>

            </div>
       
       
      </div>
    </div>
)
}

export default NewGroupModal;