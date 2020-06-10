import React from 'react'
import './NavBox.scss'

function NavBox(props) {
  const { text, onClick } = props

  return (
    <div className="NavBox"
      onClick={onClick}>
      {text}
    </div>
  )
}

export default NavBox
