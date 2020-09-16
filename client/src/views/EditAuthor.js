import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const EditAuthor = props => {
    const { id } = props;
    const [ name, setName ] = useState();
    const [ error, setError ] = useState({
        name: ''
    })
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setName(res.data.name);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id])

    const editAuthor = name => {
        axios.patch(`http://localhost:8000/api/authors/${id}`, name)
            .then(res => {
                if(res.data.errors){
                    setError(res.data.errors)
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/">Home</Link>
            {
                loaded && 
                <Form submitProp={ editAuthor } nameProp={ name } error={error}/>
            }
        </div>
    )
}

export default EditAuthor
