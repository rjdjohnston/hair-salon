import { ArrowUpRight, Phone, MessageSquare, Scissors, Store } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export function ContactContent() {
  return <>
    <section className="service-intro section-wrap careers-hero">
      <nav aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Contact Us</span></nav>
      <p className="eyebrow">REAL PEOPLE. REAL CONVERSATIONS.</p><h1>LET&apos;S<br/><em>TALK SHOP.</em></h1>
      <p className="service-lead">A question, a little feedback, or something we can help with? We&apos;re all ears. Get in touch with your local crew or send us a message.</p>
      <div className="careers-actions"><a className="button button-orange" href="#contact-message">SEND A MESSAGE <ArrowUpRight size={17}/></a><a className="text-link" href="/locations">FIND YOUR SHOP</a></div>
    </section>
    <section className="section-wrap details-section">
      <div className="section-heading"><div><p className="eyebrow">THE RIGHT PEOPLE. THE RIGHT PLACE.</p><h2>HOW CAN WE HELP?</h2></div></div>
      <div className="careers-perks">
        <article><Phone size={24} aria-hidden="true"/><h3>Your visit. Your shop.</h3><p>For appointments, availability, pricing, or a change to your booking, speak directly with your local team.</p><a className="text-link" href="/locations">SHOP PHONE NUMBERS <ArrowUpRight size={16}/></a></article>
        <article><MessageSquare size={24} aria-hidden="true"/><h3>Have something to share?</h3><p>Tell us what went well, what could be better, or what you&apos;d like to know. Your feedback matters.</p><a className="text-link" href="#contact-message">GET IN TOUCH <ArrowUpRight size={16}/></a></article>
        <article><Scissors size={24} aria-hidden="true"/><h3>Join the crew.</h3><p>Ready for your next chapter behind the chair? Explore stylist opportunities and apply online.</p><a className="text-link" href="/careers">EXPLORE CAREERS <ArrowUpRight size={16}/></a></article>
        <article><Store size={24} aria-hidden="true"/><h3>Build something of your own.</h3><p>Interested in bringing Hair Mechanix to your community? Start a conversation about ownership.</p><a className="text-link" href="/business-opportunities">FRANCHISE OPPORTUNITIES <ArrowUpRight size={16}/></a></article>
      </div>
    </section>
    <section id="contact-message" className="section-wrap details-section application-layout"><ContactForm/>
      <aside><p className="eyebrow">GOOD TO KNOW</p><h3>NEED A QUICK ANSWER?</h3><p>Call your shop for time-sensitive questions. Sending a message here does not reserve a chair, cancel a visit, or reschedule an appointment.</p><a className="text-link" href="/locations">CONTACT YOUR SHOP <ArrowUpRight size={16}/></a><h3>WHEN WE&apos;RE IN THE SHOP.</h3><p>Monday–Thursday: 10 am–8 pm<br/>Friday: 9 am–8 pm<br/>Saturday: 9 am–5 pm<br/>Sunday: 9 am–3 pm</p><p className="details-note">Hours vary by location. The last appointment is taken 30 minutes before closing. Check your shop page for exceptions.</p></aside>
    </section>
  </>
}
