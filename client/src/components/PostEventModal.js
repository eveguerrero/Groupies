import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "../styles";
import Modal from "./Modal"
import "./Modal.css"
import MembersList from "./MembersList"


function PostEventModal ({ setOpenModal, group, addEvent}){
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [starttime, setStartTime] = useState('')
  const [endtime, setEndTime] = useState('')
  const [image, setImage] = useState('')
 // :name, :description, :start_time, :endtime, :group_id, :image
  function handleNewEvent(e) {
      e.preventDefault()
      const newEvent = {
        name: name,
        description: description,
        start_time: starttime,
        end_time: endtime,
        image: image,
        group_id : group.id
      }

      fetch(``, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });

      setName('');
      setDescription('');
      setStartTime();
      setEndTime();
      setImage('')
      addEvent(newEvent);
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
        <form onSubmit={handleNewEvent}>
          <input type="text" name="name" placeholder="add title..." value={name} onChange={(e)=>{
              setName(e.target.value)
              }}
          />
          <input type="text" name="description" placeholder="type description..." value={description} onChange={(e)=>{
              setDescription(e.target.value)
              }}
          />
           <input type="text" name="starttime" placeholder="start time..." value={description} onChange={(e)=>{
              setStartTime(e.target.value)
              }}
          />
           <input type="text" name="endtime" placeholder="end time..." value={description} onChange={(e)=>{
              setEndTime(e.target.value)
              }}
          />
          <input type="text" name="image" placeholder="new image..." value={image} onChange={(e)=>{
              setImage(e.target.value)
              }}
          />
         
      </form>

            </div>
       
        <div className="footer">
        <button>Submit</button>
          <button
            onClick={() => {
              setOpenModal(false);
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

export default PostEventModal;