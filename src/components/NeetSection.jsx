import React from 'react'
import { Outlet } from 'react-router-dom'

function NeetSection() {
  return (
    <div>
      <h3>NEET Courses</h3>
      <Outlet /> {/* Renders Class11neet or Class12neet */}
    </div>
  )
}

export default NeetSection