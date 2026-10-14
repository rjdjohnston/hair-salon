export function SocialMedia() {
  return <>
    <section className="section-wrap social-gallery" aria-labelledby="gallery-heading">
      <p className="eyebrow">THE PLACES. THE PERSONALITY.</p>
      <h2 id="gallery-heading">INSIDE #HAIRMXLIFE.</h2>
      <p className="social-intro">Take a look around. Our shops bring a little garage attitude to your everyday grooming routine.</p>
      <div className="social-photo-grid">{[1, 2, 3, 4, 5, 6].map(number => <figure key={number}><img src={`/images/social-inside${number}.jpg`} alt={`Inside a Hair Mechanix shop — gallery view ${number}`} loading="lazy" width={900} height={675}/></figure>)}</div>
    </section>
  </>
}
