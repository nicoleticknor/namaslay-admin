import React from 'react';
import './Dashboard.scss'
import NavBox from '../components/boxes/NavBox/NavBox'
import SmallDataBox from '../components/boxes/SmallDataBox/SmallDataBox'
import LargeDataBox from '../components/boxes/LargeDataBox/LargeDataBox'

function Dashboard() {

  return (

    <div className="Dashboard">
      <div className="Dashboard__left-panel">
        <NavBox
          text='NavBox1'
        />
        <NavBox
          text='NavBox2'
        />
        <NavBox
          text='NavBox3'
        />
        <NavBox
          text='NavBox4'
        />
        <NavBox
          text='NavBox5'
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
      <div className="Dashboard__middle-panel-1">
        <SmallDataBox
          text='SmallDataBox1'
        />
        <LargeDataBox
          className="LargeDataBox1"
          text='LargeDataBox1'
        />
        <SmallDataBox
          text='SmallDataBox5'
        />
      </div>
      <div className="Dashboard__middle-panel-2">        <SmallDataBox
        text='SmallDataBox2'
      />
        <SmallDataBox
          text='SmallDataBox6'
        />
      </div>
      <div className="Dashboard__right-panel-1">
        <SmallDataBox
          text='SmallDataBox3'
        />
        <div className="LargeDataBox2">
          <LargeDataBox
            // className="LargeDataBox2"
            text='LargeDataBox2'
          />
        </div>
        <SmallDataBox
          text='SmallDataBox7'
        />
      </div>
      <div className="Dashboard__right-panel-2">
        <SmallDataBox
          text='SmallDataBox4'
        />
        <SmallDataBox
          text='SmallDataBox8'
        />
      </div>

    </div>
  )
}
export default Dashboard
