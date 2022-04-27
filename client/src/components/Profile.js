import { useEffect, useState } from "react";


export default function Profile(user) {
  
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

function upload(){

}  

  function handleClick() {
    upload(photo, user, setLoading);
  }

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user])

  return (
    <div className="fields">
        <h1>{user.username}</h1>
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>
  );
}