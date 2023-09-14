import React, { useState } from 'react'

const TodoForm = () => {

    const [text, setText] = useState('')

    const onFormSubmit = () => {

    };
    const onFormChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
    };
   

    return (
        <form
            onSubmit={onFormSubmit}
            className='form'
        >
            <input
                onChange={onFormChange}
                className='input'
                type="text"
                placeholder='Enter new todo...' />
        </form>
    )
}

export default TodoForm