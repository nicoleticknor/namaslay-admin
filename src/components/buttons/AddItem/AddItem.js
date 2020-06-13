import React from 'react'
import './AddItem.scss'

function addItem(props) {

  const { message, onClick } = props

  return (
    <button className="AddItemButton"
      onClick={onClick}>
      {message}
    </button>
  )

}

export default addItem
