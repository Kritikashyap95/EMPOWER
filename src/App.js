import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./AuthPages/Login";
import Nav from "./Pages/Nav";
import EmployeeDashboard from "./Pages/employee";
import admin from "./Pages/admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/" element={<admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
