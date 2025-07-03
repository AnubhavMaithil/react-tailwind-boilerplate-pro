import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routers } from '../../../Routes/Routers'
import { MainContent } from '../../../Content/MainContent'
import Loader from '../../../Components/Loader'

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className='w-full h-screen relative z-50 md:p-10 bg-black'>
        <div className='flex md:justify-start justify-center items-center h-full'>
          <div className='bg-[#ffffff13] backdrop-blur-md rounded-xl p-4 flex flex-col gap-5 shadow-md w-[90%] sm:w-[400px]'>
            <div className='flex justify-center items-center rounded p-2'>
              <img src={MainContent.AppLogo} className='h-16' alt="" />
            </div>
            <h1 className='text-2xl text-center font-semibold text-text-white'> User Login </h1>
            <p className='text-sm flex gap-2 text-white'>Don't have an account ? <Link to={Routers.REGISTER} className='text-bg-color'> Sign up </Link></p>
          </div>
        </div>
      </div>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Login