import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AdminLayout from '../Layouts/AdminLayout';
import UserLayout from '../Layouts/UserLayout';
import UserDashboard from '../Pages/Userpanel/UserDashboard/UserDashboard';
import { Routers } from './Routers';
import AdminDashboard from '../Pages/Adminpanel/AdminDashboard/AdminDashboard';
import Profile from '../Pages/Userpanel/MyAccount/Profile';
import Login from '../Pages/Userpanel/Login/Login';
import Register from '../Pages/Userpanel/Register/Register';
import AdminLogin from '../Pages/Adminpanel/Login/AdminLogin';
import Home from '../Pages/LandingPage/Home';
import { adminProfile } from '../Api/admin.api';
import { loginSuccess } from '../Redux/Reducer/authReducer';
import { userProfile } from '../Api/user.api';

const RouterPages = () => {
  const dispatch = useDispatch()
  const { token, role } = useSelector((state) => state.auth);
  useEffect(() => {
    const getUserData = async () => {
      const data = await userProfile();
      if (data?.success) {
        dispatch(loginSuccess({
          token: data?.token,
          role: data?.role,
          user: data?.user
        }))
      }
    }
    getUserData()

    const getAdminData = async () => {
      const response = await adminProfile();
      if (response?.success) {
        dispatch(loginSuccess({
          user: response?.user,
          token: response?.token,
          role: response?.role,
        }))
      }
    }
    getAdminData()
  }, [])

  return (
    <Routes>
      {/* Admin Routes */}
      {token && role === 'admin' && (
        <Route path={Routers.ADMIN_DASHBOARD} element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      )}

      {/* User Routes */}
      {token && role === 'user' && (
        <Route path={Routers.DASHBOARD} element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path={Routers.PROFILE} element={<Profile />} />
        </Route>
      )}

      {/* Common Routes */}
      <Route path="/" element={<Home />} />
      <Route path={Routers.LOGIN} element={<Login />} />
      <Route path={Routers.REGISTER} element={<Register />} />
      <Route path={Routers.ADMIN_LOGIN} element={<AdminLogin />} />

    </Routes>
  );
};

export default RouterPages;
