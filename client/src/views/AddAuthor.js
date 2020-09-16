import React, { useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import { Link, navigate } from '@reach/router';

const AddAuthor = () => {
    const [ error, setError ] = useState({
        name: ''
    })

    const createAuthor = name => {
        axios.post("http://localhost:8000/api/authors/new", name)
            .then(res => {
                if(res.data.errors){
                    setError(res.data.errors)
                } else {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <Form submitProp={ createAuthor } nameProp="" error={ error } />
        </div>
    )
}

export default AddAuthor
