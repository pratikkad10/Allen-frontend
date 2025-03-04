import React from 'react'
import { Outlet } from 'react-router-dom'

function JeeSection() {
  return (
    <div>
      <h3>JEE Courses</h3>
      <Outlet /> {/* Renders Class11neet or Class12neet */}
    </div>
  )
}

export default JeeSection