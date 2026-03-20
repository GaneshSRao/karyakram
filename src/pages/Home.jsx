import labels from '../config/labels.json'

export default function Home() {
  const events = [
    { id: 1, title: labels.events.sprintPlanning, date: 'Mar 20, 2026', time: '10:00 AM' },
    { id: 2, title: labels.events.designReview, date: 'Mar 22, 2026', time: '2:00 PM' },
    { id: 3, title: labels.events.teamSync, date: 'Mar 24, 2026', time: '4:00 PM' },
  ]

  return (
    <div className="space-y-4 md:flex md:flex-wrap md:items-start md:gap-4">
      <div className="w-full rounded-lg border border-slate-200 p-3 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">{labels.home.title}</h1>
        <p className="text-slate-600">{labels.home.intro}</p>
      </div>

      <section className="w-full lg:w-1/2 rounded-lg border border-slate-200 p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">{labels.home.upcomingEventsTitle}</h2>
        <p className="text-slate-600">{labels.home.upcomingEventsIntro}</p>
        <ul className="mt-4 space-y-3">
          {events.map((event) => (
            <li key={event.id} className="rounded-md border border-slate-200 p-3 bg-slate-50">
              <div className="font-medium text-slate-700">{event.title}</div>
              <div className="text-sm text-slate-500">{event.date}{labels.common.dateTimeSeparator}{event.time}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
