import { useNavigate } from 'react-router-dom'

interface NavMenuProps {
  setView: (view: string) => void
}

const navItems = [
  { label: 'Home',      path: '/',           view: 'LandingPage' },
  { label: 'Connect',   path: '/connect',    view: null },
  { label: 'Skillsets', path: '/skillsets',  view: 'Skillsets' },
  { label: 'Portfolio', path: '/portfolio',  view: null },
  { label: 'About Me',  path: '/background', view: 'Background' },
]

export default function NavMenu({ setView }: NavMenuProps) {
  const navigate = useNavigate()

  function handleNav(path: string, view: string | null) {
    navigate(path)
    if (view) setView(view)
  }

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Hamburger trigger */}
      <div className="drawer-content">
        <label htmlFor="nav-drawer" className="btn btn-ghost drawer-button">
          ☰
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <ul className="menu min-h-full w-60 p-4">
          {navItems.map(({ label, path, view }) => (
            <li key={path}>
              <button onClick={() => {
                handleNav(path, view)
                const drawer = document.getElementById('nav-drawer') as HTMLInputElement
                if (drawer) drawer.checked = false
              }}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}