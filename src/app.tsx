import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
      {/*   <Route path="/" element={<Home />} /> */}
      </Routes>
    </MemoryRouter>
  );
}
