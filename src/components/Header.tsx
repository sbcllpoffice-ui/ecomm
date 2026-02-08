import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center">
          <NavLink to="/" aria-label="Home" className="inline-flex items-center">
            <svg
              className="h-7 w-7 text-indigo-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </NavLink>

          <nav className="ml-6 flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              About
            </NavLink>
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="mt-2 flex flex-col gap-2 md:hidden">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-2 py-1 text-sm ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-2 py-1 text-sm ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-2 py-1 text-sm ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              About
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header


