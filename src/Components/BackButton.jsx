import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button type='button' onClick={()=>navigate(-1)}><FaArrowLeftLong className='text-lg font-medium cursor-pointer '/></button>
  )
}

export default BackButton