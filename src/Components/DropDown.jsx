import React from 'react'

const DropDown = ({onChange,options, value}) => {
   
  return (
    <select onChange={onChange} value={value} className={`select ${value} `} >
        {options.map(option=><option value={option.value} key={option.value}>{option.label}</option>)}
    </select>
  )
}

export default DropDown