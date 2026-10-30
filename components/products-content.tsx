import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const brands = [
  { name: 'Hair Mechanix', image: '/images/products-hair-mechanix.png', alt: 'Hair Mechanix styling product lineup', label: 'OUR OWN LINEUP', description: 'Take the shop finish home with Hair Mechanix precision matte cream and texturizing hair powders. Ask your stylist how to work them into your daily routine.', products: ['Precision matte cream', 'Texturizing hair powders'] },
  { name: 'Billy Jealousy', image: '/images/products-billy.jpg', alt: 'Billy Jealousy grooming products', label: 'HAIR. BEARD. SHAVE.', description: 'From shampoo for your hair type to beard and goatee care, Billy Jealousy helps keep your look maintained between visits. Ask about pre-shave products and the Hot Towel pre-shave treatment.', products: ['Shampoo and haircare', 'Beard grooming', 'Pre-shave care'] },
  { name: 'Layrite', image: '/images/products-layrite.jpg', alt: 'Layrite hair styling products', label: 'FIND YOUR FINISH', description: 'Whether you want shine, a matte finish, or a different level of hold, your stylist can help you choose the right Layrite product for your look.', products: ['Pomade', 'Supershine cream', 'Matte cream', 'Cement clay', 'Grooming spray'] },
  { name: 'Zenagen', image: '/images/zenagen-revolve-trio.png', alt: 'Zenagen Revolve men’s shampoo, conditioner, and densifying hair serum', label: 'CARE FOR THINNING HAIR', description: 'Hair Mechanix offers Zenagen haircare for men and women concerned about thinning hair. Ask your stylist about the range and whether it fits your haircare routine.', products: ['Haircare for men and women', 'Stylist-guided recommendations'] },
]

export function ProductsContent() {
  return <>
    <section className="service-intro section-wrap">
      <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Products</span></nav>
      <p className="eyebrow">THE RIGHT TOOLS. THE RIGHT LOOK.</p>
      <h1>KEEP IT SHARP.<br/><em>BETWEEN VISITS.</em></h1>
      <p className="service-lead">Good hair doesn&apos;t stop at the chair. Explore our hair, beard, and styling products—and let your stylist help you find your everyday essentials.</p>
      <Link className="button button-orange" href="/locations">FIND YOUR SHOP <ArrowUpRight size={18} aria-hidden="true"/></Link>
    </section>
    <section className="details-section section-wrap" aria-labelledby="products-heading">
      <div className="section-heading"><div><p className="eyebrow">AVAILABLE AT HAIR MECHANIX</p><h2 id="products-heading">YOUR MAINTENANCE KIT.</h2></div></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {brands.map(brand => <article className="directory-card" key={brand.name}>
          <img src={brand.image} alt={brand.alt} loading="lazy" decoding="async" width={700} height={467} className={`mb-6 aspect-[3/2] w-full object-contain${brand.name === 'Zenagen' ? ' border-[3px] border-[var(--brand-orange)]' : ''}`}/>
          <p className="eyebrow">{brand.label}</p><h3>{brand.name}</h3><p>{brand.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${brand.name} product range`}>{brand.products.map(product => <li key={product} className="border border-current/25 px-3 py-2 text-base">{product}</li>)}</ul>
        </article>)}
      </div>
      <p className="details-note">Products, prices, and availability may vary by location. Contact your shop for current stock and recommendations. Products are available in shops; online checkout is not offered here.</p>
    </section>
    <section className="visit-section section-wrap">
      <div><p className="eyebrow">SKIP THE GUESSWORK</p><h2>ASK YOUR STYLIST.</h2></div>
      <div><p className="service-lead">Oily or dry hair? A beard that needs attention? Not sure how much hold you need? Tell us about your routine and the finish you want. We&apos;ll help you choose a product and show you how to use it.</p><Link className="text-link" href="/locations">FIND A HAIR MECHANIX <ArrowUpRight size={18} aria-hidden="true"/></Link></div>
    </section>
  </>
}
