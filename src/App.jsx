import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/*" element={<Home />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
