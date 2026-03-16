import { Link } from 'react-router-dom'

const sidebarItems = [
  { id: 1, label: 'Home', to: '/' },
  { id: 2, label: 'Profile', to: '/profile' },
  { id: 3, label: 'Settings', to: '/settings' },
  { id: 4, label: 'Help', to: '/help' },
]

export default function Sidebar() {
  return (
    <div className="w-full md:w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4">
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
    </div>
  )
}
