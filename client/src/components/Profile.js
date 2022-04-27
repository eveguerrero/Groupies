import { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch} from "react-router-dom";


export default function Profile({user, updateUser}) {
  
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
  const [bio, setBio] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState([]);
  
  
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     bio: ""
// });
    
console.log(user);
       const id = !!user?.user ? user?.user.id : user.id;
    
     function handleSubmit(e) {
      e.preventDefault();
      fetch(`/users/${id}`, {
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
          });
        } else r.json().then((data) => setErrors(data.errors));
      })
          
    }

    
    function handleImageSubmit(e){
      e.preventDefault()
      const formData = new FormData();
    
      formData.append('image', image)
      // for (let i = 0; i < files.length; i++){
      //     formData.append('images[]', files[i])
      // }


      fetch(`/users/${id}`, {
          method: 'POST',
          body: formData
      })
  }
  

  useEffect(() => {
    if (user?.imageUrl) {
        setImageUrl(user.imageURL);
    }
  }, [user])

  return (
    <div className="fields">
        
      {/* <input type="file" onChange={handleChange} />
      <button disabled={loading || !image} onClick={handleClick}>Upload</button>
      <img src={imageUrl} alt="Avatar" className="avatar" />
      <h1>{user.username}</h1> */}
<img src={imageUrl} alt="Avatar" className="avatar" />
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