import { MainContent } from '../../Content/MainContent'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navItems = ["Home", "About us", "Partners"]
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  }
  return (
    <div className='space-y-8'>
      <div className='flex items-center md:p-6 p-2 justify-between w-full'>
        <div className='flex gap-5 justify-center items-center'>

          <img src={MainContent.AppLogo} alt="" className='md:h-10 h-6 sm:h-8 object-contain' />
        </div>
        <div className='hidden md:flex gap-12 justify-center items-center'>
          {navItems?.map((item) => (
            <p
              key={item}
              className='text-gray font-bold hover:text-dark_green cursor-pointer'
              onClick={() => {
                const id = item.toLowerCase().replace(/\s/g, ''); // "About us" -> "aboutus"
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {item}
            </p>
          ))}

        </div>


        <Button title={'Connect Wallet'} className="bg-bg-color text-text-white rounded-lg p-2 shadow-md" onClick={handleNavigate} />
      </div>
    </div>

  )
}

export default Navbar