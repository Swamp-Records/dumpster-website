import './shows.css'

import show1 from '/show_posters/show1.jpg'
import show2 from '/show_posters/show2.jpg'
import show3 from '/show_posters/show3.jpg'
import show4 from '/show_posters/show4.png'
import show5 from '/show_posters/show5.jpg'
import show6 from '/show_posters/show6.jpg'
import show7 from '/show_posters/show7.jpg'
import show8 from '/show_posters/show8.jpg'
import show9 from '/show_posters/show9.jpg'

function Shows() {
  return (
    <main className="shows-page">
      <section className="shows-header">
        <h1>SHOWS</h1>
        <p>where we've played this year</p>
      </section>

      <section className="poster-wall">
        <article className="poster-card tilt-left">
          <img src={show1} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-right">
          <img src={show2} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-small-left">
          <img src={show3} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-small-right">
          <img src={show4} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-left">
          <img src={show5} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-right">
          <img src={show6} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-small-left">
          <img src={show7} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-small-right">
          <img src={show8} alt="Dumpster show poster" />
        </article>

        <article className="poster-card tilt-left">
          <img src={show9} alt="Dumpster show poster" />
        </article>
      </section>
    </main>
  )
}

export default Shows