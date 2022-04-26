
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

//import Login from "./Login";



import './App.css';



function App() {

  const [user, setUser] = useState(null);
  
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

  
  

  
  

  return (
   
        <>
        <main>
          <Switch>
            
            
            {/* <Route exact path="/login">
              <Login onLogin={setUser} />
            </Route> */}
            
          </Switch>
          
        </main>
      </>
  );
}

export default App;


