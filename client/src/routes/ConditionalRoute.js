import { Routes, Route } from "react-router-dom"
import GettingStarted from "../containers/gettingStarted"
import Home from "../containers/home"
import Login from "../containers/auth/login"
import Register from "../containers/auth/register"
import AdminHome from "../containers/adminHome"
import AdminLogin from "../containers/auth/adminLogin"
import AdminRegister from "../containers/auth/adminRegister"

import { useSelector } from "react-redux";

const ConditionalRoute = () => {
  const { userRole, firstTimeUser } = useSelector((state) => state.user);
  if (userRole === "user" ) {
    return <UserRoutes />;
  } else if (userRole === "admin") {
    return <AdminRoutes />;
  } else {
      return <FirstUserRoutes />;
  } 
};

const FirstUserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GettingStarted />} />
    </Routes>
  );
};

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
  
    </Routes>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/login" element={<AdminLogin/>} />
      <Route path="/register" element={<AdminRegister />} />
    </Routes>
  );
};

export default ConditionalRoute;