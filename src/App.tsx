import { useState } from 'react'
import LandingPage from './Pages/Landing'
import Background from './Pages/Background'
import Skillsets from './Pages/Skillsets'
import Portfolio from './Pages/Portfolio'
import Connect from './Pages/Connect'
import NavMenu from './components/NavMenu'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

const urlToView: Record<string, string> = {
  '/': 'LandingPage',
  '/skillsets': 'Skillsets',
  '/background': 'Background',
}

function ViewSwitcher({ view }: { view: string }) {
  if (view === 'LandingPage') return <LandingPage />
  if (view === 'Skillsets') return <Skillsets />
  if (view === 'Background') return <Background />
  return <LandingPage />
}

function AppInner() {
  const location = useLocation()
  const [view, setView] = useState(
    urlToView[location.pathname] ?? 'LandingPage'
  )

  const currentView = urlToView[location.pathname] ?? view

  return (
    <>
      <NavMenu setView={setView} />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/*" element={<ViewSwitcher view={currentView} />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

