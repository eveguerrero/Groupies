import React, { useState, useEffect} from "react";
import "./Modal.css"
import Select from 'react-select'
import { Link, useHistory, useParams } from "react-router-dom";
import { render } from 'react-dom';
import { useForm } from 'react-hook-form';



function Modal ({ setMemberModalOpen, setSearch, search, users, filteredUsers, setSelectedCategory, group, addMember}){
    const [name, setName] = useState("")
    const [userID, setUserID] = useState()
    const [groupID, setGroupID] = useState()
    // const [selectedValue, setselectedValue] = useState([])
    const { handleSubmit } = useForm();
  
   const usersList = users
   console.log(usersList)
    
   function handleNewMember(e) {
    e.preventDefault()
    const newMember = {
      user_id:   userID,
      group_id: group.id

    }
    console.log('new  Member:', newMember)
    fetch(`/user_groups`, {
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
        setMemberModalOpen(false)
    }
    
    
    function handleSearch(e){
        
        setSearch(e.target.value)
    }
    function handleFilterChange(e){
        e.preventDefault()
        setSelectedCategory(e.target.value)
        setUserID(e.target.value.id)
    }
    
    const options = usersList.map(d => ({
      "value" : d.id,
      "label" : d.username
    }))
   
    const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    console.log(e.value)
    setUserID(e.value);

    setSelectedValue(e.value);
   
  };

  const onSubmit = (formData, event) => {
     console.log("Form Data: ", formData)
     console.log("Selected Options: ", selectedValue)
     setMemberModalOpen(false)
  }
    
    
    
    
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
       <Select
          // isMulti = {true}
          options={options}
          closeMenuOnSelect={false}
          value={options.find(obj => obj.value === selectedValue)}
          onChange={handleChange}/>

     <button type="submit">Save</button>
       
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