import React, { useState, useEffect} from "react";
import "./Modal.css"
import Select from 'react-select'
import { Link, useHistory, useParams } from "react-router-dom";

function Modal ({ setMemberModalOpen, setSearch, search, users, filteredUsers, setSelectedCategory, group}){
    const [name, setName] = useState("")
    
    function LoadGroup(id) {
      let dropdown = document.getElementById('locality-dropdown');
       dropdown.length = 0;

      fetch(`/groups/${id}`)
        .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.warn('Looks like there was a problem. Status Code: ' + 
              response.status);  
            return;  
          }
    
          // Examine the text in the response  
          response.json().then(function(data) {  
            let option;
        
          for (let i = 0; i < data.length; i++) {
              option = document.createElement('option');
              option.text = data[i].name;
              option.value = data[i].abbreviation;
              dropdown.add(option);
          }    
          });  
        }
      )
    }
  
   const usersList = group.users
    const data = useParams()
    // console.log("params:",data)
    // console.log("windows",window.location.pathname)

    useEffect(() => {
      LoadGroup(data.id);
    }, [data]);
    
    
    function handleSubmit(){

    }
    function handleSearch(e){
        
        setSearch(e.target.value)
    }
    function handleFilterChange(e){
        e.preventDefault()
        setSelectedCategory(e.target.value)
    }
    filteredUsers.unshift('Users')

    // const options = [
    //   { value: 'chocolate', label: 'Chocolate' },
    //   { value: 'strawberry', label: 'Strawberry' },
    //   { value: 'vanilla', label: 'Vanilla' }


    // ]

    // const options = group.users.map( u => ({ value: u.id, label: u.username }));
    // return { options };
  
   // console.log(options)
    console.log(group)
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
<form onSubmit={handleSubmit} 
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
          onChange={(e) => setName(e.target.value)}/>
          
  {/* <input
          style={{width:'200px'}}
          type='text'
          id='search'
          placeholder='Search User'
          onChange={handleSearch}/> */}
          {/* <select className="dropbtn" name="coffeelist" id="list" onChange={handleFilterChange}>
            {
                filteredUsers.map(u => {
                    return <option key={u.id} value={u.username}>{u.username}</option>
                    // <ListItem key={item.id} item={item} />
                })
            }

        </select> */}
       <Select id="locality-dropdown" name="locality"/>

          </form>
</form>
            </div>
       
        <div className="footer">
        <button>Submit</button>
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
)
}

export default Modal;