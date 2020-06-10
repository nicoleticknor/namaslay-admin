import React from 'react'
import './SmallDataBox.scss'

function SmallDataBox(props) {

  const { text } = props

  return (
    <div className="SmallDataBox">{text}</div>
  )
}

export default SmallDataBox
