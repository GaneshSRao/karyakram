import { Link } from 'react-router-dom'

const sidebarItems = [
  { id: 1, label: 'Home', to: '/', icon: 'fa-solid fa-home' },
  { id: 2, label: 'Profile', to: '/profile', icon: 'fa-solid fa-user' },
  { id: 3, label: 'Calendar', to: '/calendar', icon: 'fa-solid fa-calendar' },
  { id: 4, label: 'Settings', to: '/settings', icon: 'fa-solid fa-cog' },
  { id: 5, label: 'Help', to: '/help', icon: 'fa-solid fa-circle-question' },
]

const mobileItems = sidebarItems.filter((item) => ['/', '/profile', '/calendar', '/settings'].includes(item.to))

export default function Sidebar() {
  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-30 h-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white border-t border-slate-700 md:hidden">
        <ul className="h-full flex m-0 p-0">
          {mobileItems.map((item) => (
            <li key={item.id} className="flex-1 h-full">
              <Link
                to={item.to}
                aria-label={item.label}
                className="flex h-full w-full items-center justify-center aspect-square text-white hover:bg-slate-700 transition"
              >
                <i className={`${item.icon} text-2xl`} aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="hidden md:block md:w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 min-h-screen">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Menu</h3>
          <p className="text-slate-300 text-sm">Navigation links</p>
        </div>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
