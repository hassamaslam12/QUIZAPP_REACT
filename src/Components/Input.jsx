import React from 'react'

const Input = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} className='p-1 m-1 border-5'  />
    {props.value && <label>{props.value}</label>}
    </div>
  )
}

export default Input
