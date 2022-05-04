import { useEffect, useState } from "react";

import { Link} from "react-router-dom";

import { Button } from "../styles";
import Login from "./Login";


export default function Profile({user, setUser}) {
 if (!user) return <Login onLogin={setUser} />;
return (
  <>
  <img src={user.image} alt="Avatar" className="avatar" />
  <br></br>
  <br></br>
  <Button as={Link} to="/profilesettings" exact>Profile Settings</Button> 
  
  <p>{user.name}</p>
  <p>{user.bio}</p>

  </>
)
}