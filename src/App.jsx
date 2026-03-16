import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProfilePage from './pages/Profile'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-100 p-0 rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-4 min-h-screen rounded-none">
          <Sidebar />
          <main className="p-4 md:p-6 bg-white rounded-none">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/settings"
                element={<div className="text-slate-700">Settings page placeholder</div>}
              />
              <Route
                path="/help"
                element={<div className="text-slate-700">Help page placeholder</div>}
              />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
