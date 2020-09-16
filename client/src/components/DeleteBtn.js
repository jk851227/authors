import React from 'react';
import axios from 'axios';

const DeleteBtn = props => {
    const { id, success } = props;

    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                success();
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button onClick={ deleteAuthor }>Delete</button>
        </div>
    )
}

export default DeleteBtn
