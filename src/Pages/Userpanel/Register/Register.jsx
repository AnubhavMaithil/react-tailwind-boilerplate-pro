import { useState } from 'react'
import InputField from '../../../Components/InputField'
import Button from '../../../Components/Button'
import { Link } from 'react-router-dom'
import { Routers } from '../../../Routes/Routers'
import { MainContent } from '../../../Content/MainContent'
import Loader from '../../../Components/Loader'

function Register() {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    mobile: "",
    username: "",
  });
  return (
    <div>
      <div className='w-full h-screen relative z-50 bg-black md:p-10'>
        <div className='flex md:justify-start justify-center items-center h-full'>
          <div className='bg-[#ffffff13] backdrop-blur-md rounded-xl p-4 flex flex-col gap-5 shadow-md w-[90%] sm:w-[400px]'>
            <div className='flex justify-center items-center rounded p-2'>
              <img src={MainContent.AppLogo} className='h-16' alt="" />
            </div>
            <h1 className='text-2xl text-center font-semibold text-text-white'>User Register</h1>
            <form className='flex flex-col gap-5'>
              <InputField type='text' label="Full Name" placeholder="Enter your Fullname" onChange={(e) => setPayload({ ...payload, username: e.target.value })} />
              <InputField type='email' label="Email" placeholder="Enter your Email" onChange={(e) => setPayload({ ...payload, email: e.target.value })} />
              <InputField type="tel" label="Mobile No." placeholder="Enter your mobile number" onChange={(e) => setPayload({ ...payload, mobile: e.target.value })} />
              <div className='flex flex-col gap-2 text-text-white'>
                <Button type="submit" title={'Connect Wallet'} className="bg-bg-color text-text-white rounded-lg p-2 shadow-md" disabled={loading} />
                <p className='text-sm flex gap-2'>Already have an account ? <Link to={Routers.LOGIN} className='text-bg-color'> Sign in </Link></p>
              </div>
            </form>
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

export default Register