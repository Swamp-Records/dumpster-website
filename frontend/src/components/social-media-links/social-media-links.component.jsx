import { FaEnvelope, FaInstagram, FaSpotify } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="social-media-links" aria-label="Social media">
      <a
        href="https://www.instagram.com/carlosdumpster/"
        className="social-link"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram aria-hidden="true" />
      </a>
      <a
        href="https://open.spotify.com/artist/4e9hl1ZjdH4mkLrAJoyxCz"
        className="social-link"
        aria-label="Spotify"
        target="_blank"
        rel="noreferrer"
      >
        <FaSpotify aria-hidden="true" />
      </a>
      <a
        href="mailto:carlosdumpster@gmail.com"
        className="social-link"
        aria-label="Email"
      >
        <FaEnvelope aria-hidden="true" />
      </a>
    </div>
  )
}

export default SocialMedia
