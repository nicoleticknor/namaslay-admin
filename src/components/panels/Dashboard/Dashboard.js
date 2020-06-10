import React from 'react'
import './Dashboard.scss'
import SmallDataBox from '../../boxes/SmallDataBox/SmallDataBox'
import LargeDataBox from '../../boxes/LargeDataBox/LargeDataBox'

function Dashboard(props) {
  return (
    <div className="Dashboard">
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
