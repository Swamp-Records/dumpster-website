import './about.css'

import bandPhoto1 from '../assets/dumpster-about-hero.webp'
import bandPhoto2 from '../assets/dumpster-about-portrait.webp'

function About() {
  return (
    <main className="about-page">

      <header className="about-header">
        <h1 className="about-title">MEET <br />DUMPSTER</h1>
      </header>

      <section className="about-content">

        <div className="about-photo about-photo-vertical">
          <img
            src={bandPhoto2}
            alt="Dumpster band together"
          />
        </div>

        <div className="about-bio">
          <p>
            Up-and-coming bedroom rock artist and Gainesville favorite,
            Dumpster is reminiscent of Blur, Radiohead, and the eternal
            sense of isolation and resilience that defines young adulthood.
            Having played every major venue in Gainesville and just finished
            his first state tour, Dumpster continues to expand his fanbase
            through lively alternative indie rock performances and
            coalescing DIY spirit.
          </p>
        </div>

        <div className="about-note">
          <p>overcoming self doubt
          <br />
          through expression</p>
        </div>

        <div className="about-photo about-photo-wide">
          <img
            src={bandPhoto1}
            alt="Dumpster band members"
          />
        </div>

      </section>

    </main>
  )
}

export default About









// import { useRef } from 'react'
// import './about.css'
// import groupPhoto from '../assets/dumpster-about-hero.webp'
// import portrait from '../assets/dumpster-about-portrait.webp'

// export default function About() {
//   const bioRef = useRef(null)

//   function scrollToBio() {
//     const bio = bioRef.current
//     const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
//     bio.focus({ preventScroll: true })
//     bio.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
//   }

//   return (
//     <main className="about-page" aria-label="About Dumpster">
//       <div className="about-intro">
//         <img
//           className="about-hero"
//           src={groupPhoto}
//           alt="Dumpster with an electric guitar and amp beside a wrecked car"
//           width="1445"
//           height="752"
//           fetchPriority="high"
//         />
//         <button
//           className="about-scroll"
//           type="button"
//           aria-label="Scroll to the band bio"
//           onClick={scrollToBio}
//         />
//       </div>
//       <div className="about-story">
//         <div className="about-bio">
//           <p id="about-bio" ref={bioRef} tabIndex={-1}>
//             Up-and-coming bedroom rock artist and Gainesville favorite, Dumpster is reminiscent
//             of Blur, Radiohead, and the eternal sense of isolation and resilience that defines
//             young adulthood. Having played every major venue in Gainesville and just finished his
//             first state tour, Dumpster continues to expand his fanbase through lively alternative
//             indie rock performances and coalescing DIY spirit.
//           </p>
//         </div>
//         <img
//           className="about-portrait"
//           src={portrait}
//           alt="The three members of Dumpster in a grocery aisle, with the middle member wearing headphones"
//           width="704"
//           height="1162"
//           loading="lazy"
//         />
//       </div>
//     </main>
//   )
// }
