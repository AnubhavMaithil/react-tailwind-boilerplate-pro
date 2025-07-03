import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu';
import { Routers } from '../Routes/Routers';
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../Components/Footer';
import { MainContent } from '../Content/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { logout } from '../Redux/Reducer/authReducer';
import { persistor } from '../Redux/store';

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const page = location.pathname.split("/")[1]?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || 'Dashboard';
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    {
      title: 'Dashboard',
      icon: <LuLayoutDashboard />,
      path: Routers.DASHBOARD,
    },
  ];
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    setOpenAccordion(null);
  }, [location.pathname]);


  const user = useSelector((state) => state.auth);
  const name = user?.user?.username
  const email = user?.user?.email


  const isActive = (path) => location.pathname === path;


  const navigateToHomePage = () => {
    navigate(Routers.LOGIN);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3FB649',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        persistor.purge();
        navigateToHomePage();
      }
    });
  };

  return (
    <div className="flex justify-end gap-2 md:p-1 w-full h-screen relative z-50 text-text-white bg-black" >
      <div className={`absolute md:relative w-[250px] py-5 z-50 h-full bg-[#ffffff13] backdrop-blur-md md:rounded-xl flex duration-300 flex-col ${!isSidebarOpen ? "md:left-0 -left-full" : "md:-left-full left-0"}`}>
        <div className="px-4  overflow-y-auto scrollbar flex flex-col gap-4">
          <div className="w-full flex items-center gap-3 justify-between">
            <div>
              <img src={MainContent.AppLogo} className='h-14' alt="" />
            </div>
            <button
              onClick={toggleSidebar}
              className={`text-xl  focus:outline-none bg-white/10 text-text-white  font-medium rounded-xl p-2  ${!isSidebarOpen ? "hidden" : "block"
                }`}
            >
              <FiChevronsRight />
            </button>
            <button
              onClick={toggleSidebar}
              className={`text-xl md:hidden bg-white/10  text-text-white focus:outline-none rounded-xl p-2 ${isSidebarOpen ? "hidden" : "block"
                }`}
            >
              <FiChevronsRight />
            </button>
          </div>
          <div>
            <nav className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                        className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors duration-200 ${openAccordion === index ? '' : ''}`}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon}
                          {item.title}
                        </span>
                        <IoIosArrowDown className={`transition-transform duration-300 ${openAccordion === index ? "rotate-180" : ""}`} />
                      </button>

                      <div className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? "max-h-[500px] mt-2" : "max-h-0"}`}>
                        <div className="flex flex-col gap-2">
                          {item.children.map((child, i) => (
                            <Link
                              key={i}
                              to={child.path}
                              className={`flex items-center gap-2 p-2 rounded-xl text-sm transition-colors duration-200 
                    ${isActive(child.path)
                                  ? 'bg-[#ffffff13] backdrop-blur-md font-semibold'
                                  : ''}`}
                            >
                              {child.icon}
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-2 rounded-xl  transition-colors duration-200 
            ${isActive(item.path) ? 'font-semibold bg-[#ffffff13] backdrop-blur-md' : ''}`}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div>
            <div>
              <button className='px-4 bg-red-500  w-full py-2 flex items-center gap-4  rounded' onClick={handleLogout}>
                <LuLogOut />  Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex flex-col w-full h-full duration-200 ${isSidebarOpen ? "w-full" : "md:w-[calc(100%-250px)]"} flex-shrink-0`}>
        <main className="overflow-y-auto  flex flex-col md:gap-2 gap-1">
          <header className="flex items-center p-2 md:rounded-xl bg-[#ffffff13] backdrop-blur-md text-white justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={toggleSidebar}
                className={`text-xl focus:outline-none bg-text-white/10  rounded-xl p-2  ${!isSidebarOpen ? "hidden" : "block"
                  }`}
              >
                <FiChevronsRight />
              </button>
              <button
                onClick={toggleSidebar}
                className={`text-xl  focus:outline-none bg-text-white/10   rounded-xl p-2  ${isSidebarOpen ? "hidden" : "block"
                  }`}
              >
                <FiChevronsRight />
              </button>
              <p className='md:text-base  text-sm font-medium '>{page}</p>
            </div>
            <div className="">
              <div className='flex items-center gap-2'>
                <div className='flex flex-col items-end'>
                  <p className="uppercase">{name}</p>
                  <p className='text-sm text-text-color/80'>{email}</p>
                </div>
                <div className='w-10 h-10 rounded-xl overflow-hidden bg-text-white/10 '>
                  <img className='w-full h-full object-top object-cover' src="https://img.icons8.com/3d-fluency/94/guest-male--v3.png" alt="" />
                </div>
              </div>
            </div>
          </header>
          <div className='p-3 md:p-1'>
            <Outlet />
          </div>
          <div className='p-3 md:p-1'>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout