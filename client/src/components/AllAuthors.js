import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteAuthor from './DeleteAuthor';


const AllAuthors = (props) => {
    const [authorArr, setAuthorArr] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                setAuthorArr(res.data)
            })
            .catch((err) => console.log(err))
        //alrays remember the dependency array--empty is fine
    }, []);
    const updateAfterDelete = (deletedAuthorId) => {
        const filteredArray = authorArr.filter((authorObj) => {

            return authorObj._id !== deletedAuthorId;
        });

        setAuthorArr(filteredArray);
    }

    return (
        <div>
            <Link to="/authors/new">Add an author</Link>
            <h2> We have quotes by</h2>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Action available</th>
                </thead>
                <tbody>
                    
                   
                        {
                            authorArr.map((author, index) => (
                                <tr key={index} style={{border:"1px solid black"}}>
                               

                                    <td >{author.name}</td>
                                    <td>
                                       <span className="edit-btn"><Link to={"/authors/" + author._id + "/edit"}> Edit </Link> </span> |
                                        <DeleteAuthor authorId={author._id} afterDelete={updateAfterDelete} />
                                    </td>
                                  
                
                
                                    </tr>
                    ))
        }  
                     
                        
                       
                        
                    
                </tbody>
            </table>
         
        </div >
     );
}

export default AllAuthors;