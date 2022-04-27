import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";
import Profile from "./Profile"


function NavBar({ user, setUser, setItemToEdit }) {
  console.log(window.location.pathname)
  const history = useHistory();
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }

 

  return (
    <Wrapper>
      <Logo>
        <Link to="/" exact>Groupies</Link>
      </Logo>
      <Nav>




        {!user ? 
        <Button as={Link} to="/login" exact>Login</Button> 
        :
        (user) ?
        <>
        {/* <Button as={Link} to="/itemform" exact>New Item</Button> */}
        
        
          <Button variant="outline" onClick={handleLogoutClick}>
          Logout
          </Button>
          <Button as={Link} to="/profile" exact>My Profile</Button> 
        </>
        :  
        <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        }

      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: 'Tapestry', cursive;
  font-weight: lighter;
  font-size: 4rem;
  color: royalBlue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;