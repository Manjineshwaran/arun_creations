import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Infographics from './pages/Infographics'
import SocialMedia from './pages/SocialMedia'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infographics" element={<Infographics />} />
      <Route path="/social-media" element={<SocialMedia />} />
    </Routes>
  )
}

export default App
