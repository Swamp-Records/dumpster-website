import './home-release.css'
import heroPhoto from '../assets/dumpster-hero.webp'
import headphoneCord from '../assets/headphone-cord.svg'
import player from '../assets/stardust-player.webp'
import cover from '../assets/stardust-cover.webp'

export default function Home() {
  return (
    <main>
      <section className="home-hero" aria-labelledby="home-title">
        <img
          className="home-hero-photo"
          src={heroPhoto}
          alt=""
          width="1437"
          height="904"
          fetchPriority="high"
        />
        <div className="home-hero-brand">
          <h1 id="home-title">DUMPSTER</h1>
          <p>made at home music</p>
        </div>
      </section>

      <section className="home-release" aria-labelledby="release-title">
        <img
          className="home-release-cord"
          src={headphoneCord}
          alt=""
          width="1437"
          height="192"
        />
        <div className="home-release-copy">
          <p>New single:</p>
          <h2 id="release-title">STARDUST</h2>
          <p>out now!</p>
          <a
            className="home-release-link"
            href="https://open.spotify.com/track/0bOHLjY3CxHbRHfoYcMwpM"
            aria-label="stream here — Stardust on Spotify"
          >
            stream here
          </a>
        </div>
        <div className="home-release-player">
          <img src={player} alt="" width="613" height="801" />
          <img
            className="home-release-cover"
            src={cover}
            alt=""
            width="320"
            height="320"
          />
        </div>
      </section>
    </main>
  )
}
