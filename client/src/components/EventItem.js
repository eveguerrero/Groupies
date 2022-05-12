import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
function EventItem({event}){

   return (
       <>
<img src={event.image}></img>
       <div>
       
       <h1>{event.title}</h1> 
       <h2>{event.description}</h2>
       <h3>{event.start}</h3>
       <h3>{event.end}</h3>
       </div>

       </>
   )


}

export default EventItem;