import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"
import Login from "../containers/auth/login"
import Register from "../containers/auth/register"
import AdminHome from "../containers/adminHome"

import { useSelector } from "react-redux";

const ConditionalRoute = () => {
  const { userRole } = useSelector((state) => state.user);
  if (userRole === "user" ) {
    return <UserRoutes />;
  } else if (userRole === "admin") {
    return <AdminRoutes />;
  } else {
    return <DefaulRoutes />;
  }
};

const DefaulRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default ConditionalRoute;