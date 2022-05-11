import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";
import Profile from "./Profile"


function NavBar({ user, setUser, setItemToEdit }) {
  const history = useHistory();
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/login")
      }
    });
  }

 

  return (
    <>
    <Wrapper>

    
      
      <Logo>
        <Link to="/home" exact>Groupies</Link>
      </Logo>
      <Nav>




        {!user ? 
        <Button as={Link} to="/login" exact>Login</Button> 
        :
        (user) ?
        <>
        
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
    <img src={user.image} alt="Avatar" className="avatar" />
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: 'Copperplate';
  font-weight: lighter;
  font-size: 3rem;
  color: pink;
  margin: 0;
  line-height: 1;

  a {
    color: hotpink;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
  position: absolute;
  right: 8px;
`;


export default NavBar;