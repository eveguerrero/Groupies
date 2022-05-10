import React, { useState, useEffect} from "react";
import "./Modal.css"
import Select from 'react-select'
import { Link, useHistory, useParams } from "react-router-dom";
import { render } from 'react-dom';

function Modal ({ setMemberModalOpen, setSearch, search, users, filteredUsers, setSelectedCategory, group, addMember}){
    const [name, setName] = useState("")
    const [userID, setUserID] = useState()
    const [groupID, setGroupID] = useState()
    const [selectedOptions, setSelectedOptions] = useState([])
    
  
   const usersList = users
   console.log(usersList)
    
   function handleNewMember(e) {
    e.preventDefault()
    const newMember = {
      user_id:   userID,
      group_id: group.id
    }
    fetch(`/usergroups`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newMember)
        });

        setUserID('');
        setGroupID('');
        
        addMember(newMember);
    }
    
    
    function handleSearch(e){
        
        setSearch(e.target.value)
    }
    function handleFilterChange(e){
        e.preventDefault()
        setSelectedCategory(e.target.value)
    }
    
    const options = usersList.map(d => ({
      "value" : d.id,
      "label" : d.username
    }))
   
    
    
    
return (
    
     <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setMemberModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div>
<form>
<form onSubmit={handleNewMember} 
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "auto",
        }}>
          <label htmlFor="topName">UserName</label>
          <input 
          type="text" 
          id="name"  
          onChange={handleSearch}
          // onChange={(e) => {
          //     setUserID(e.target.value.id)
          //     console.log(e.target.value)
          //   }
          // }
        />
       <Select options={options}
       isMulti
      //  value={}
      //  onChange={this.handleChange}
       options={options}
       onChange={(e) => {
        setUserID(e.target)
        console.log(e.target)
       }
      }
      />
       <button>Submit</button>
          </form>
</form>
            </div>
       
        <div className="footer">
       
          <button
            onClick={() => {
              setMemberModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
);
}


export default Modal;