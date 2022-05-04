
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";
import ProfileSettings from "./ProfileSettings";
import Home from "./Home";
import './App.css';
import GroupPage from "./GroupPage";



import './App.css';



function App() {

  const [user, setUser] = useState("");
  
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const [groups, setGroups] = useState([])
  const [issueRequest] = useState(false)
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
  
  function loadsGroups(){
    fetch("/groups")
      .then(r => r.json())
      .then(groups => {
        setGroups(groups)
        console.log(groups)
      })
  }

  useEffect(() => {
    loadsGroups()
  }, [issueRequest])

  
  
  function updateUser(newName, newBio) {
    setUser({ ...user, name: newName, bio: newBio});
  }

  
  
  if (!user) return <Login onLogin={setUser} />;
  return (
   
        <>
        <NavBar user={user} setUser={setUser} />
        <main>
          <Switch>
            
            
            <Route exact path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Route path="/profile">
            <Profile user={user} updateUser={updateUser} setUser={setUser}/>
            </Route>
            <Route path="/profilesettings">
            <ProfileSettings user={user} updateUser={updateUser} setUser={setUser}/>
            </Route>
            <Route path="/home">
            <Home user={user} updateUser={updateUser} setUser={setUser}/>
            </Route>
            <Route path="/groups/:id">
            <GroupPage user={user} updateUser={updateUser} setUser={setUser}/>
            </Route>

          </Switch>
          
        </main>
      </>
  );
}

export default App;


