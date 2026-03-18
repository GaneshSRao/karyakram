export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200 p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">Profile</h1>
        <p className="text-slate-600">Welcome to your profile page. You can add more profile details here.</p>
        <ul className="mt-4 space-y-2">
          <li className="rounded-md border border-slate-200 p-3 bg-slate-50">Name: Jane Doe</li>
          <li className="rounded-md border border-slate-200 p-3 bg-slate-50">Email: jane.doe@example.com</li>
          <li className="rounded-md border border-slate-200 p-3 bg-slate-50">Member since: 2026</li>
        </ul>
      </div>
    </div>
  )
}
