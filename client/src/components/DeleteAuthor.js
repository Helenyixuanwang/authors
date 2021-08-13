import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

const DeleteAuthor = (props) => {
    const { authorId, afterDelete } = props;
    

    const deleteHandler=()=> {
        console.log("Delete Id is "+authorId);
        axios.delete("http://localhost:8000/api/authors/"+ authorId)
        .then((res)=>{
            console.log("author deleted: ");
            console.log(res.data);
            //run the specific code for after the delete is successful
            afterDelete(authorId);
        } )
        .catch((err)=> console.log(err))

    }

    return(
        <button onClick={deleteHandler}>
        Delete 
        </button>
    )
}

export default DeleteAuthor;