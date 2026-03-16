export default function ProfilePage() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title">Profile</h1>
          <p className="card-text">
            Welcome to your profile page. You can add more profile details here.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: Jane Doe</li>
            <li className="list-group-item">Email: jane.doe@example.com</li>
            <li className="list-group-item">Member since: 2026</li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}
