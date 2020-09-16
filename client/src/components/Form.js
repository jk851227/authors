import React, { useState } from 'react'

const Form = (props) => {
    const { nameProp, submitProp, error } = props;
    const [ name, setName ] = useState(nameProp);

    const handleSubmit = e => {
        e.preventDefault();
        submitProp({name});
    }

    return (
        <div>
            {
                error.name ?
                <p>{ error.name.message }</p>
                :
                ''

            }
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form
