// THIS FILE IS USED FOR BUTTON COMPONENT
import React from 'react'

// Pass an argument that will update based on button component attributes
const MyButton = ({title, color}) => {
    // Style components
  return <button style={{backgroundColor: color}}>{title}</button>
}

export default MyButton