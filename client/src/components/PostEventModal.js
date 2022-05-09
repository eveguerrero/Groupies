function PostEventModal ({ setOpenModal}){
    
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
        <Select options={options} />

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