import { useState } from 'react'
import './contact.css'
import flipPhone from '../assets/contact-phone.webp'

const submissionMessages = {
  sending: 'Sending…',
  sent: 'Message sent.',
  error: 'Your message could not be sent. Please try again.',
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const isSubmitting = status === 'sending'

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '5cc7c201-0457-428b-88bc-4e7a989546be')
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok || !(await response.json()).success) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <img className="contact-phone" src={flipPhone} alt="" width="303" height="458" />
      <h1 className="contact-title" id="contact-title">
        CONTACT<br />US
      </h1>

      <form className="contact-form" aria-labelledby="contact-title" onSubmit={handleSubmit}>
        <fieldset className="contact-fields" disabled={isSubmitting}>
          <input type="text" name="name" autoComplete="name" aria-label="Name" placeholder="name" required />
          <input type="email" name="email" autoComplete="email" aria-label="Email" placeholder="email" required />
          <textarea name="message" aria-label="Message" placeholder="message" required />
          <button className="contact-submit" type="submit">submit</button>
        </fieldset>
        <p className="contact-status" role="status">{submissionMessages[status]}</p>
      </form>
    </main>
  )
}
