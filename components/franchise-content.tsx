import Image from 'next/image'
import { ArrowUpRight, Check, Scissors, Store, Users, MapPin } from 'lucide-react'
import { FranchiseForm } from '@/components/franchise-form'

const advantages = [
  { icon: Store, title: 'A shop with personality.', text: 'An industrial-inspired setting, music, and a laid-back atmosphere. Hair Mechanix is built to feel different from an ordinary haircut stop.' },
  { icon: Scissors, title: 'More than a haircut.', text: 'Professional haircuts and grooming give customers a reason to find their favorite stylist and make the shop part of their routine.' },
  { icon: Users, title: 'A place in your community.', text: 'Great conversations and personal service are at the heart of the experience. Bring a welcoming local gathering place to your neighborhood.' },
  { icon: MapPin, title: 'A brand beyond its roots.', text: 'Founded in Michigan in 2012, Hair Mechanix has grown into new communities. Explore where your ownership goals could fit.' },
]

export function FranchiseContent() {
  return <>
    <section className="service-intro section-wrap careers-hero">
      <nav aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Franchise Opportunities</span></nav>
      <p className="eyebrow">GROW WITH HAIR MECHANIX</p>
      <h1>YOUR OWN SHOP.<br/><em>OUR KIND OF ATTITUDE.</em></h1>
      <p className="service-lead">Bring a different kind of grooming experience to your community. Explore ownership with a brand built around great cuts, real connections, and unmistakable personality.</p>
      <div className="careers-actions"><a className="button button-orange" href="#franchise-inquiry">LET&apos;S TALK OWNERSHIP <ArrowUpRight size={17}/></a><a className="text-link" href="#opportunity">EXPLORE THE OPPORTUNITY</a></div>
      <p className="careers-caption">FRANCHISE & BUSINESS OPPORTUNITIES · HAIR MECHANIX</p>
    </section>
    <section id="opportunity" className="section-wrap details-section">
      <div className="section-heading"><div><p className="eyebrow">A BUSINESS WITH CHARACTER</p><h2>BUILT TO STAND OUT.</h2></div></div>
      <div className="careers-perks">{advantages.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="section-wrap careers-time">
      <p className="eyebrow">LOCAL ROOTS. YOUR NEXT CHAPTER.</p><h2>BRING HAIR MECHANIX TO YOUR CITY.</h2>
      <p>Every community has its own character. Tell us about yours—and what you want to build. Start a conversation about your preferred market, your background, and the opportunity to become part of Hair Mechanix.</p>
      <div className="careers-perks">
        <div className="service-shop-image"><Image src="/images/social-inside1.jpg" alt="Styling stations inside a Hair Mechanix shop" fill sizes="(max-width: 600px) 90vw, 45vw" /></div>
        <div className="service-shop-image"><Image src="/images/social-inside2.jpg" alt="Another view of the Hair Mechanix shop interior" fill sizes="(max-width: 600px) 90vw, 45vw" /></div>
      </div>
      <p className="details-note">Market availability and ownership requirements must be confirmed with the franchise team. An inquiry is not a reservation or a commitment.</p>
    </section>
    <section className="section-wrap service-body careers-role">
      <div><p className="eyebrow">START WITH THE RIGHT QUESTIONS</p><h2>EXPLORE OWNERSHIP.</h2><p>A great business decision starts with a clear understanding of the opportunity. Use your first conversation to discuss:</p>
        <ul className="service-options">{['Your preferred city and market availability','Your background and approach to running a business','Investment requirements, fees, and financing questions','Training, operating support, and brand expectations','The review process and a realistic opening timeline'].map(item => <li key={item}><Check size={18} aria-hidden="true"/>{item}</li>)}</ul>
        <h3>MAKE AN INFORMED DECISION.</h3><p>Request the current franchise disclosure documents and review them with your legal and financial advisers before making any commitment. Investment details and financial performance information should come directly from the franchise team.</p>
      </div>
      <aside className="careers-apply"><p className="eyebrow">GET TO KNOW HAIR MECHANIX</p><h2>SEE THE BRAND.<br/>MEET THE SHOPS.</h2><p>Discover the story behind the brand and the places that bring it to life.</p><a className="button button-orange" href="/locations">EXPLORE OUR SHOPS <ArrowUpRight size={17}/></a><p className="details-note">See how Hair Mechanix combines professional grooming with a shop experience all its own.</p><a className="text-link" href="/our-story">OUR STORY <ArrowUpRight size={16}/></a></aside>
    </section>
    <section className="section-wrap careers-time"><p className="eyebrow">NO PRESSURE. JUST A CONVERSATION.</p><h2>LET&apos;S SEE WHAT&apos;S POSSIBLE.</h2><p>You don&apos;t need every answer to take the first step. Share your interests below and begin exploring whether Hair Mechanix is the right fit for your goals.</p></section>
    <section id="franchise-inquiry" className="section-wrap details-section application-layout">
      <FranchiseForm/>
      <aside><p className="eyebrow">YOUR FIRST STEP</p><h3>TELL US ABOUT YOUR VISION.</h3><p>Share your preferred market, timeline, and any questions you want to discuss. This is an expression of interest, not a franchise application or agreement.</p><h3>BEFORE YOU COMMIT.</h3><p>Confirm availability, investment requirements, and the full terms with the franchise team. No earnings or investment returns are promised.</p></aside>
    </section>
    <FranchiseQuestions/>
  </>
}

function FranchiseQuestions() {
  const questions = [
    ['How much does a franchise cost?', 'Request current investment requirements, franchise fees, and ongoing costs directly from the franchise team. Review the applicable franchise disclosure documents before making any decision.'],
    ['Is my preferred market available?', 'Include your city and state in the inquiry. Territory availability and any market requirements must be confirmed directly with Hair Mechanix.'],
    ['What training and support are available?', 'Ask the franchise team to explain the current training, opening support, operating resources, and ongoing responsibilities included in the offering.'],
    ['Does an inquiry commit me to anything?', 'No. Submitting an inquiry expresses your interest and allows you to start exploring the opportunity. It does not reserve a territory or create a franchise agreement.'],
  ]
  return <section className="section-wrap details-section"><div><p className="eyebrow">BEFORE YOU OPEN THE DOORS</p><h2>A FEW GOOD QUESTIONS.</h2><div className="detail-menu careers-faq">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div><aside><p className="details-note">This page provides general information only and is not an offer to sell a franchise. Any offer is made through the required franchise disclosure documents and in compliance with applicable law.</p></aside></section>
}
