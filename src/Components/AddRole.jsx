import React, { useRef } from 'react'

const AddRole = ({addRole}) => {
    const input = useRef(null)
const onClick = ()=>{
    if(input.current.value){
        addRole(input.current.value)
        input.current.value =''
    } else {
        alert('Please enter role')
    }
}
  return (
    <div className='d-flex'>
        <input placeholder='Enter new role name' ref={input} className='form-control' />
        <button className='btn btn-outline-primary ml-2' onClick={onClick}>Add Role</button>
    </div>
  )
}

export default AddRole