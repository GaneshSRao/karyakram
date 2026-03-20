import { useMemo, useState } from 'react'
import labels from '../config/labels.json'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default function CalendarPage() {
  const [current, setCurrent] = useState(new Date())

  const events = useMemo(
    () => [
      { id: 1, title: labels.events.sprintPlanning, date: '2026-03-20', description: 'Sprint planning meeting' },
      { id: 2, title: labels.events.designReview, date: '2026-03-22', description: 'Design team review' },
      { id: 3, title: labels.events.teamSync, date: '2026-03-24', description: 'Weekly team sync' },
    ],
    [],
  )

  const firstDay = new Date(current.getFullYear(), current.getMonth(), 1)
  const daysInMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate()
  const formatTwoDigit = (value) => String(value).padStart(2, '0')

  const days = useMemo(() => {
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1
      const dateKey = `${current.getFullYear()}-${formatTwoDigit(current.getMonth() + 1)}-${formatTwoDigit(day)}`
      const dayEvents = events.filter((event) => event.date === dateKey)
      return { day, dayEvents }
    })
  }, [current, daysInMonth, events])

  const prevMonth = () => {
    setCurrent((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrent((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  return (
    <div className="space-y-4 relative">
      <div className="rounded-lg border border-slate-200 p-3 bg-white shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center ">
            <button
              onClick={prevMonth}
              aria-label="Previous month"
              className="rounded-md bg-slate-800 px-3 py-2 text-white hover:bg-slate-700"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button>
            <div className="flex-1 text-center min-w-[200px]">
              <div className="text-xl font-semibold text-slate-800">{monthNames[current.getMonth()]}</div>
              <div className="text-sm text-slate-500">{current.getFullYear()}</div>
            </div>
            <button
              onClick={nextMonth}
              aria-label="Next month"
              className="rounded-md bg-slate-800 px-3 py-2 text-white hover:bg-slate-700"
            >
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="hidden lg:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-2 text-white font-medium hover:from-slate-800 hover:to-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Add event"
            >
              {labels.calendar.addEventButton}
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {days.map(({ day, dayEvents }) => (
            <div key={day} className="rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
              <div className="flex items-stretch">
                <div className="flex flex-none items-center justify-center bg-slate-200 px-3 text-xl font-bold text-slate-700">
                  {formatTwoDigit(day)}
                </div>
                <div className="flex-1 p-3">
                  <div className="text-slate-700">{monthNames[current.getMonth()]} {current.getFullYear()}</div>
                  {dayEvents.length === 0 ? (
                    <p className="font-semibold mt-2 text-slate-500">No events</p>
                  ) : (
                    <ul className="mt-2 space-y-2">
                      {dayEvents.map((event) => (
                        <li key={event.id} className="rounded-md border border-slate-300 bg-white p-2">
                          <div className="font-medium text-slate-700">{event.title}</div>
                          <p className="text-xs text-slate-500">{event.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="lg:hidden fixed bottom-20 right-4 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white text-xl font-bold shadow-xl flex items-center justify-center hover:from-slate-800 hover:to-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400">
        {labels.calendar.addEventButtonMobile}
      </button>
    </div>
  )
}
