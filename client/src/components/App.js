
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";



import './App.css';



function App() {

  const [user, setUser] = useState("");
  
  const [errors, setErrors] = useState([])

  const history = useHistory()

  // console.log(selectedCauses)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }
    );
  }, []);

  
  
  function updateUser(newName, newBio, newImage) {
    setUser({ ...user, name: newName, bio: newBio});
  }

  
  

  return (
   
        <>
        <NavBar user={user} setUser={setUser} />
        <main>
          <Switch>
            
            
            <Route exact path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Route path="/profile">
            <Profile user={user} updateUser={updateUser} />
            </Route>

          </Switch>
          
        </main>
      </>
  );
}

export default App;


