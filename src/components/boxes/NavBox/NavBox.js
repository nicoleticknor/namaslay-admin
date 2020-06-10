import React from 'react'
import './NavBox.scss'

function NavBox(props) {
  const { text } = props

  return (
    <div className="NavBox">
      {text}
    </div>
  )
}

export default NavBox
