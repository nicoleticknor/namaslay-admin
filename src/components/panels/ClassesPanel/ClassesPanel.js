import React from 'react'
import './ClassesPanel.scss'
import CalendarBox from '../../boxes/LargeDataBox/CalendarBox/CalendarBox'
import AddItem from '../../buttons/AddItem/AddItem'

function ClassesPanel(props) {

  const { title } = props
  //need classes data from props

  const handleAddClass = () => {
    alert('hello');
  }

  //need a function to loop through classes data from props and produce classdata boxes for the divs
  //i have no idea how we are going to assign the divs to a timeslot
  //maybe this is just jimmied fake data

  return (
    <div className="ClassesPanel">
      <h1 className="ClassPanel__Title">{title}</h1>
      <div className="ClassesPanel__Calendar">
        <CalendarBox /></div>
      <div className="ClassesPanel__Details">
        <div className="ClassesPanel__Details__Schedule">
          <div className="ClassesPanel__Details__Schedule-slot1">
            hello
          </div>
          <div className="ClassesPanel__Details__Schedule-slot2">
            hello
          </div>
          <div className="ClassesPanel__Details__Schedule-slot1">
            hello
          </div>
          <div className="ClassesPanel__Details__Schedule-slot2">
            <AddItem className="AddItemButton" message="Add a Class" onClick={handleAddClass} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassesPanel
