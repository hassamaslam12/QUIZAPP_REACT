import React from 'react'

const Button = (props) => {
  const { btnClick,
btnValue,
className
  } = props;
  return (
    <button className={className?className:'btn btn-primary m-1'} onClick={btnClick}>
      {btnValue}
    </button>
  )
}

export default Button
