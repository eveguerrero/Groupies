import React, { useState } from "react";
import "./Modal.css"
function Modal ({ setOpenModal }){
    const [name, setName] = useState("")

    function handleSubmit(){

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
          type="name" 
          id="name" value={name} 
          onChange={(e) => setName(e.target.value)}/>
  
          
           
        </form>
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

export default Modal;