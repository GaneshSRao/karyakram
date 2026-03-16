export default function Home() {
  const users = [
    { id: 1, name: 'Amit', role: 'Developer', team: 'Frontend' },
    { id: 2, name: 'Nisha', role: 'Designer', team: 'UX' },
    { id: 3, name: 'Ravi', role: 'Product Manager', team: 'Growth' },
  ]

  return (
    <div className="container mt-4">
      <div className="card p-3">
        <h1 className="card-title">Home</h1>
        <p className="card-text">This is the home page. Here is a simple data list:</p>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <strong>{user.name}</strong> — {user.role} ({user.team})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
