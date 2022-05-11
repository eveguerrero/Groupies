import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PostsForm(){
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    function handleNewPost(e) {
        e.preventDefault()
        const newPost = {
        //   user_id: user.id,
        //   group_id: group.id,
          description: description,
          image: image
        }
    }

}

export default PostsForm;