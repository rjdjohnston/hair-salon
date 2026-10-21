import { ArrowUpRight } from 'lucide-react'

export function MobileBookingTicket() {
  return <a href="/schedule-appointment-now" className="mobile-booking-ticket">
    <span><strong>BOOK YOUR CHAIR</strong><span>Your shop. Your time. Your next cut.</span></span>
    <span className="ticket-arrow" aria-hidden="true"><ArrowUpRight size={32}/></span>
  </a>
}
