import labels from '../config/labels.json'

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200 p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">{labels.profile.title}</h1>
        <p className="text-slate-600">{labels.profile.intro}</p>
        <ul className="mt-4 space-y-2">
          <li className="rounded-md border border-slate-200 p-3 bg-slate-50">{labels.profile.name}</li>
          <li className="rounded-md border border-slate-200 p-3 bg-slate-50">{labels.profile.email}</li>
          <li className="rounded-md border border-slate-200 p-3 bg-slate-50">{labels.profile.memberSince}</li>
        </ul>
      </div>
    </div>
  )
}
