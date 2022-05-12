
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";
import ProfileSettings from "./ProfileSettings";
import Home from "./Home";
import './App.css';
import GroupPage from "./GroupPage";
import CalendarItem from "./CalendarItem";
import PostsPage from "./PostsPage";


import './App.css';



function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([])
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])
  const [issueRequest] = useState(false)
  const [events, setEvents] = useState([])
  const [userGroups, setUserGroups] = useState([])
  // console.log(selectedCauses)


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }
    );
    // fetch items
    fetch("/groups").then((r) => {
      if (r.ok) {
        r.json().then((groups) => {
        setGroups(groups)
        console.log(groups)
        });
      }
    }
    );

    // fetch causes
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((users) => {
        setUsers(users)
        });
      }
    }
    );

    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((events) => {
        setEvents(events)
        });
      }
    }
    );

    fetch("/user_groups").then((r) => {
      if (r.ok) {
        r.json().then((usergroups) => {
        setUserGroups(usergroups)
        });
      }
    }
    );
  }, []);



  
  
  

 

  
  
  function updateUser(newName, newBio) {
    setUser({ ...user, name: newName, bio: newBio});
  }

  function addGroup(newGroup) {
    newGroup.id = groups.length + 1
    setGroups([...groups, newGroup])
  }

  function addMember(newMember) {
    newMember.id = userGroups.length + 1
    setUserGroups([...userGroups, newMember])
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
            <Home user={user} updateUser={updateUser} setUser={setUser} addGroup={addGroup}/>
            </Route>
            <Route path="/groups/:id">
            <GroupPage user={user} updateUser={updateUser} setUser={setUser} users={users} events={events} setEvents={setEvents} addMember={addMember}/>
            </Route>
            <Route path="/calendar">
            <CalendarItem groups={groups}/>
            </Route>
            <Route path="/posts-page">
            <PostsPage />
            </Route>

          </Switch>
          
        </main>
      </>
  );
}

export default App;


