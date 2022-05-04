import { useEffect, useState } from "react";

function ProfileSettings({user, updateUser, setUser}){
    const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const [loading, setLoading] = useState(false);
    const [bio, setBio] = useState('')
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/me`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            bio: bio,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then(() => {
              updateUser(name, bio);
              setErrors(["User was updated successfully"]);
              setTimeout(() => setErrors([]), 1500);
              
              // fetch("/me").then((r) => {
              //   if (r.ok) {
              //     r.json().then((user) => setUser(user));
              //   }
              // }
              // )
             
            });
          } else r.json().then((data) => setErrors(data.errors));
        })
       
      
      }
        
      
        // auto-login
       
        // function updateImage(newImage) {
        //   setImage({ ...user, image: newImage});
        // }
      
      

      function handleImageSubmit(e){
        e.preventDefault()
        const formData = new FormData();
      
        formData.append('image', image)
       
  
  
        fetch(`/me`, {
            method: 'PATCH',
            body: formData
        })
        // updateImage(formData)
    }
    
  
    useEffect(() => {
      if (user?.image) {
          setImage(user.image);
      }
    }, [user])
  
    return (
      <div className="fields">
          
        
  <img src={image} alt="Avatar" className="avatar" />
        <form onSubmit={handleSubmit} 
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "auto",
        }}>
          <label htmlFor="topName">Name</label>
          <input 
          type="name" 
          id="name" value={name} 
          onChange={(e) => setName(e.target.value)}/>
              
          <label htmlFor="bio">Bio</label>
  
          <input 
          type="bio" 
          id="bio" 
          value={bio} 
          onChange={(e) => setBio(e.target.value)}/>
          <input type='submit'/>
        </form>
  <br></br>
  <br></br>
        <form onSubmit={handleImageSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "auto",
        }}>
          
          <input
              type="file"
              accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
          <input type='submit'/>
        </form>
  
        
        <br></br>
        
      </div>
    );
}

export default ProfileSettings;