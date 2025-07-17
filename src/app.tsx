import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

export function App() {
  return (
    <MemoryRouter>
      <Routes>
         <Route path="/home" element={<Home />} /> 
         <Route path="/" element={<Login/>} />
         <Route path="/" element={<Register/>} />
      </Routes>
    </MemoryRouter>
  );
}
