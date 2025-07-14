
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'



export function App() {
  return (
<MemoryRouter>
        <Routes>
      <Route path="/" element={<Home />} />
        </Routes>
</MemoryRouter>

  )
}
