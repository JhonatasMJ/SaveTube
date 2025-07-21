import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { LoadingProvider } from "./context/LoadingContext";
import { AuthProvider } from "./context/AuthContext";
import { ListProvider } from "./context/ListContext";

export function App() {
  return (
    <MemoryRouter>
      <LoadingProvider>
        <AuthProvider>
          <ListProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </ListProvider>
        </AuthProvider>
      </LoadingProvider>
    </MemoryRouter>
  );
}
