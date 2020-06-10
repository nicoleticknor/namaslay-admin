import React, { useState } from 'react';
import './Landing.scss'
import NavBox from '../../components/boxes/NavBox/NavBox'
import Dashboard from '../../components/panels/Dashboard/Dashboard'

function Landing() {

  const [showClasses, showClassesHandler] = useState(false)
  const [showPrograms, showProgramsHandler] = useState(false)
  const [showTeachers, showTeachersHandler] = useState(false)
  const [showDashboard, showDashboardHandler] = useState(true)

  const handleShowClasses = () => {
    showClassesHandler(!showClasses)
    showProgramsHandler(false)
    showTeachersHandler(false)
    showDashboardHandler(false)
    console.log(showClasses);
  }
  const handleShowPrograms = () => {
    showProgramsHandler(!showPrograms)
    showTeachersHandler(false)
    showDashboardHandler(false)
    console.log(showPrograms);
  }
  const handleShowTeachers = () => {
    showTeachersHandler(!showTeachers)
    showProgramsHandler(false)
    showDashboardHandler(false)
    console.log(showTeachers);
  }

  const handleShowDashboard = () => {
    showTeachersHandler(!showTeachers)
    showProgramsHandler(false)
    console.log(showTeachers);
  }

  return (

    <div className="Landing">
      <div className="Landing__nav-panel">
        <NavBox
          text='Logout Button'
        />
        <NavBox
          text='Settings Button'
        />
        <NavBox
          text='Edit Classes'
          onClick={handleShowClasses}
        />
        <NavBox
          text='Edit Programs'
          onClick={handleShowPrograms}
        />
        <NavBox
          text='Edit Teachers'
          onClick={handleShowTeachers}
        />
        <NavBox
          text='NavBox6'
        />
        <NavBox
          text='NavBox7'
        />
        <NavBox
          text='NavBox8'
        />
        <NavBox
          text='NavBox10'
        />
        <NavBox
          text='NavBox11'
        />
        <NavBox
          text='NavBox12'
        />
      </div>
      <div className="Landing__view-panel">
        <Dashboard />
      </div>
    </div>
  )
}
export default Landing
