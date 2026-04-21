import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  helpType: string
  message: string
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const helpOptions = [
  'Full-Stack Development',
  'Front-End Development',
  'Back-End Development',
  'Design & UX',
  'Hospitality Consulting',
  'Something Else',
]

export default function Connect() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    helpType: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', helpType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="connect background3">
      <div style={{display:"flex", flexDirection:"row", justifyContent: "space-around", margin: "5px"}}>
      <h1 style={{color: "#ceaf83"}}>Let's Connect...</h1>
      <img src="./public/fairy.svg" style={{height: "150px"}}/>
      </div>
      <div className="text-panel">
      <form
        className="contact"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Netlify required hidden fields */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div>
          <label className="label" htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="label" htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="label" htmlFor="phone">Phone</label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label" htmlFor="helpType">What can I help with?</label><br/>
          <select
            className="select"
            id="helpType"
            name="helpType"
            value={formData.helpType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option</option>
            {helpOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="message">Message</label><br/>
          <textarea
            className="textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="btn glass-btn" style={{alignSelf: "center", color: "#ceaf83"}}
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p role="status">Message sent! I'll be in touch soon 💖</p>
        )}
        {status === 'error' && (
          <p role="alert">Something went wrong — please try again.</p>
        )}
      </form>

    </div>

      <div className="social-links">
        <p>Find Me On:</p>
        <a
        className="btn glass-btn"
        href="https://www.instagram.com/frontendfairy"
        target="_blank"
        rel="noreferrer"
        style={{color: "#ceaf83"}}
        >
          Instagram
        </a> <br/>
        <a
        className="btn glass-btn"
        href="https://www.linkedin.com/in/hope-clarke-ice"
        target="_blank"
        rel="noreferrer"
        style={{color: "#ceaf83"}}
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}