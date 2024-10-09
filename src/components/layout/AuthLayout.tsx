import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>AuthLayout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
