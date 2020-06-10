import React from 'react'
import './LargeDataBox.scss'

function LargeDataBox(props) {

  const { text } = props

  return (
    <div className="LargeDataBox">{text}</div>
  )
}

export default LargeDataBox
