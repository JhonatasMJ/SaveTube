import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { LoadingProvider } from "./context/LoadingContext";
import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <MemoryRouter>
      <LoadingProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </LoadingProvider>
    </MemoryRouter>
  );
}
