import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProtectedRoutes() {
  const isAuth = useSelector((state) => state.auth.user);
  return <>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</>;
}
