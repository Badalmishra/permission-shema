import React, { useRef } from 'react'

const AddPermission = ({ addPermission }) => {
    const input = useRef(null)
    const onClick = () => {
        if (input.current.value) {
            addPermission(input.current.value)
            input.current.value = ''
        } else {
            alert('Please enter permission')
        }
    }
    return (
        <div className='d-flex'>
            <input placeholder='Nest with dots eg: a.b.c' ref={input} className='form-control' />
            <button className='btn btn-outline-primary ml-2' onClick={onClick}>Add Permissions</button>
        </div>
    )
}

export default AddPermission