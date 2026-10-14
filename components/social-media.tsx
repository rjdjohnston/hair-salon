export function SocialMedia() {
  return <>
    <section className="section-wrap social-gallery" aria-labelledby="gallery-heading">
      <p className="eyebrow">THE PLACES. THE PERSONALITY.</p>
      <h2 id="gallery-heading">INSIDE #HAIRMXLIFE.</h2>
      <p className="social-intro">Take a look around. Our shops bring a little garage attitude to your everyday grooming routine.</p>
      <div className="social-photo-grid">{[1, 2, 3, 4, 5, 6].map(number => <figure key={number}><img src={`/images/social-inside${number}.jpg`} alt={`Inside a Hair Mechanix shop — gallery view ${number}`} loading="lazy" width={900} height={675}/></figure>)}</div>
    </section>
    <section className="section-wrap social-commercials" aria-labelledby="commercials-heading">
      <p className="eyebrow">HAIR MECHANIX ON SCREEN</p>
      <h2 id="commercials-heading">COMMERCIALS.</h2>
      <p className="social-intro">A closer look at the craft, the crew, and life behind the chair. Press play.</p>
      <div className="social-video-grid">
        <article><video controls playsInline preload="metadata" aria-label="Five great reasons to work for Hair Mechanix"><source src="/media/careers-commercial.mp4" type="video/mp4"/>Your browser does not support video. <a href="/media/careers-commercial.mp4">Download the careers video.</a></video><p className="eyebrow">JOIN THE CREW</p><h3>5 great reasons to work for Hair Mechanix</h3></article>
        <article><video controls playsInline preload="metadata" muted aria-label="A haircut and styling session"><source src="/media/styling-session.mp4" type="video/mp4"/>Your browser does not support video. <a href="/media/styling-session.mp4">Download the styling video.</a></video><p className="eyebrow">IN THE CHAIR</p><h3>A closer look at a fresh cut</h3></article>
      </div>
    </section>
  </>
}
