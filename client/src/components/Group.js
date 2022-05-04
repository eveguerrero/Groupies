import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Group ({group, user}){

  const id = group.id
      
    return (
        <li>
            <Link to={`/groups/${id}`}>
        <h1>{group.name}</h1>
        </Link>
        </li>
    
    )
}

export default Group;