import './press-kit.css'
import bandPhoto from '../assets/dumpster-about-portrait.webp'
import groupPhoto from '../assets/dumpster-about-hero.webp'

const links = [
  {
    label: 'Listen on Spotify',
    href: 'https://open.spotify.com/artist/4e9hl1ZjdH4mkLrAJoyxCz',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/carlosdumpster/',
  },
]

export default function PressKit() {
  return (
    <main className="epk-page" aria-labelledby="epk-title">
      <header className="epk-hero">
        <img
          className="epk-hero-photo"
          src={bandPhoto}
          alt="Dumpster in a Gainesville grocery store"
          width="704"
          height="1162"
          fetchPriority="high"
        />
        <div className="epk-hero-copy">
          <p>Electronic press kit · Gainesville, Florida</p>
          <h1 id="epk-title">dumpster</h1>
          <span>Alternative indie rock</span>
        </div>
      </header>

      <section className="epk-profile" aria-labelledby="epk-bio-title">
        <div className="epk-bio">
          <p className="epk-eyebrow">For the indie lovers sitting at home, pondering life</p>
          <h2 id="epk-bio-title">Meet Dumpster</h2>
          <p>
            Led by Carlos Tovar with bandmates Margot Parsons, Tony Rush, and Neil
            Parekh, Dumpster brings lively alternative indie rock performances
            and a coalescing DIY spirit to the Gainesville scene. After playing
            every major venue in Gainesville and completing their first state
            tour, the band continues to grow its fanbase one show at a time.
          </p>
        </div>

        <dl className="epk-facts">
          <div>
            <dt>Based in</dt>
            <dd>Gainesville, Florida</dd>
          </div>
          <div>
            <dt>Sound</dt>
            <dd>Alternative indie rock</dd>
          </div>
          <div>
            <dt>Members</dt>
            <dd>Carlos Tovar, Margot Parsons, Tony Rush, Neil Parekh</dd>
          </div>
        </dl>
      </section>

      <figure className="epk-group-photo">
        <img
          src={groupPhoto}
          alt="Dumpster with guitar and amp beside a car"
          width="1445"
          height="752"
          loading="lazy"
        />
      </figure>

      <section className="epk-contact" aria-labelledby="epk-contact-title">
        <div>
          <p className="epk-eyebrow">Press, booking, and other inquiries</p>
          <h2 id="epk-contact-title">Get in touch</h2>
          <a className="epk-email" href="mailto:carlosdumpster@gmail.com">
            carlosdumpster@gmail.com
          </a>
        </div>
        <nav className="epk-links" aria-label="Dumpster links">
          {links.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </nav>
      </section>
    </main>
  )
}
