import { useEffect, useState } from 'react'
import './shows.css'

function formatShowDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null

  return {
    month: new Intl.DateTimeFormat('en-US', { month: 'short' })
      .format(date)
      .toUpperCase(),
    day: new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date),
  }
}

function formatLocation(event) {
  const venue = event.venue
  if (!venue) return 'Location TBD'

  return [venue.name, venue.city, venue.region]
    .filter((part, index, parts) => part && parts.indexOf(part) === index)
    .join(', ')
}

export default function Shows() {
  const [shows, setShows] = useState([])
  const [status, setStatus] = useState('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadShows() {
      try {
        const response = await fetch('/api/shows', { signal: controller.signal })
        const responseText = await response.text()
        let data

        if (responseText.trim()) {
          try {
            data = JSON.parse(responseText)
          } catch {
            throw new Error(
              response.ok
                ? 'The shows service returned invalid data.'
                : `Shows request failed with HTTP ${response.status}. Check the backend logs.`,
            )
          }
        } else if (response.ok) {
          throw new Error('The shows service returned an empty response.')
        }

        if (!response.ok) {
          throw new Error(
            (typeof data?.detail === 'string' && data.detail) ||
              `Shows request failed with HTTP ${response.status}. Check the backend logs.`,
          )
        }

        if (!Array.isArray(data)) {
          throw new Error('The shows service returned invalid data.')
        }

        setShows(data)
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErrorMessage(error.message || 'Could not load upcoming shows.')
          setStatus('error')
        }
      }
    }

    loadShows()
    return () => controller.abort()
  }, [])

  return (
    <main className="shows-page" aria-labelledby="shows-title">
      <header className="shows-header">
        <p className="shows-kicker">come see us</p>
        <h1 id="shows-title">SHOWS</h1>
      </header>

      {status === 'loading' && (
        <p className="shows-message" role="status">Loading shows…</p>
      )}

      {status === 'error' && (
        <p className="shows-message shows-message-error" role="alert">
          {errorMessage || 'We could not load the show schedule. Please try again soon.'}
        </p>
      )}

      {status === 'ready' && shows.length === 0 && (
        <p className="shows-message">No upcoming shows announced yet.</p>
      )}

      {status === 'ready' && shows.length > 0 && (
        <ul className="shows-list">
          {shows.map((event, index) => {
            const date = formatShowDate(event.datetime)
            const location = formatLocation(event)

            return (
              <li className="show-item" key={event.id || `${event.datetime}-${index}`}>
                <div className="show-date" aria-label={date ? undefined : event.datetime}>
                  {date ? (
                    <>
                      <span>{date.month}</span>
                      <strong>{date.day}</strong>
                    </>
                  ) : (
                    <strong>TBA</strong>
                  )}
                </div>
                <div className="show-details">
                  <h2>{event.venue?.name || 'Dumpster live'}</h2>
                  <p>{location}</p>
                </div>
                {event.url && (
                  <a
                    className="show-link"
                    href={event.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    tickets
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}