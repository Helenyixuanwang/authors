import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const EditAuthor = (props) => {
    

    const { id }= props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

   useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+ id )
        .then((res) =>{
            console.log(res);
            setName(res.data.name);
            
          
       })
       .catch((err) => console.log(err))

    },[]);

    const handleSubmit = (e)=> {
        //whenever we submit a form, we must do this--if we dont do it, we lost all of our state
        e.preventDefault();

   

    axios.put("http://localhost:8000/api/authors/"+ id, {name})
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
            <h1>Edit Author</h1>
            <Link to="/authors/">Home</Link>
           
            <form onSubmit={handleSubmit} className="form-div">
            {
                    errors.name?
                    <p style={{color:"red"}}>{ errors.name.message}</p>
                    :null
                }
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <div>
                <button className="submit-btn" type="submit">Submit</button>
                <span className="cancel-link"><Link to="/authors/">Cancel</Link></span>
                </div>
            </form>
        </div>
     );
}
 
export default EditAuthor;