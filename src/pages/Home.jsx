export default function Home() {
  const users = [
    { id: 1, name: 'Amit', role: 'Developer', team: 'Frontend' },
    { id: 2, name: 'Nisha', role: 'Designer', team: 'UX' },
    { id: 3, name: 'Ravi', role: 'Product Manager', team: 'Growth' },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200 p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">Home</h1>
        <p className="text-slate-600">This is the home page. Here is a simple data list:</p>
        <ul className="mt-4 space-y-2">
          {users.map((user) => (
            <li key={user.id} className="rounded-md border border-slate-200 p-3 bg-slate-50">
              <strong>{user.name}</strong> — {user.role} ({user.team})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
