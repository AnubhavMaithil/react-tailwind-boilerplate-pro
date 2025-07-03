import React, { useEffect, useRef, useState } from 'react'
import TopSection from './TopSection'
import AboutMe from './AboutMe'
import { useSelector } from 'react-redux'

const UserDashboard = () => {
  const user = useSelector((state) => state.auth?.user);


  return (
    <div className='flex flex-col gap-5'>
      <TopSection user={user} />
      <AboutMe user={user} />
    </div>
  )
}

export default UserDashboard