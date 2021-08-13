import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const CreateAuthor = (props) => {
    const [ name, setName]=useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {name})
    .then((res)=> {
        console.log(res);
        navigate("/authors/");

    })
    .catch((err)=>{
        console.log(err);
        console.log(err.response);
        //err.response.data is the body you get in Postman
        if(err.response.data.errors) {
            //save the errors in state so we can display them
            setErrors(err.response.data.errors)
        }
    })
    }

    return ( 

        <div>
            <Link to="/authors/">Home</Link>
            <h1>create Authors</h1>
            <form onSubmit={handleSubmit}>
            {
                    errors.name?
                    <p style={{color:"red"}}>{ errors.name.message}</p>
                    :null
                }
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <button type="submit">Submit</button>
                <Link to="/authors/">Cancel</Link>
            </form>
        </div>
     );
}
 
export default CreateAuthor;