import { ArrowUpRight, Check, Clock, Music2, TrendingUp, Users } from 'lucide-react'

const applicationUrl = 'https://hairmx.com/apply-now/'
const perks = [
  { icon: TrendingUp, title: 'Your talent. Real upside.', text: 'Store performance bonuses, referral bonuses, employee discounts, and opportunities for advancement. When the team wins, you win.' },
  { icon: Clock, title: 'A life beyond the chair.', text: 'Flexible scheduling with day and evening shifts. Short weekends: Saturday 9–5 and Sunday 9–3.' },
  { icon: Music2, title: 'Bring your personality.', text: 'Music pumping. Laid-back clients. A drama-free atmosphere where your style and personality have room to shine.' },
  { icon: Users, title: 'A crew in your corner.', text: 'Great coworkers, a referral program, and support as you build your client book. Newly licensed? We’ll train you.' },
]

export function CareersHero() {
  return <section className="service-intro section-wrap careers-hero"><nav aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Careers</span></nav><p className="eyebrow">FULL-TIME OPPORTUNITIES · MICHIGAN</p><h1>BIG PERSONALITY.<br/><em>BIGGER POSSIBILITIES.</em></h1><p className="service-lead">Cool cuts. Great coworkers. A career that rewards your skill. Bring your talent to Hair Mechanix—and find a crew that has your back.</p><div className="careers-actions"><a className="button button-orange" href="#open-role">FIND YOUR NEXT CHAIR <ArrowUpRight size={17}/></a><a className="text-link" href="#benefits">EXPLORE THE PERKS</a></div><p className="careers-caption">LICENSED BARBERS & COSMETOLOGISTS · NEW TALENT WELCOME</p></section>
}

export function CareersBenefits() {
  return <><section id="benefits" className="section-wrap details-section"><div className="section-heading"><div><p className="eyebrow">GOOD WORK DESERVES GREAT REWARDS</p><h2>LET YOUR SKILLS PAY OFF.</h2></div></div><div className="careers-pay-grid">{[['$1,000','Full-time sign-on bonus'],['Up to 60%','Commission'],['$20/hr','Guaranteed + tips while building your book'],['$200–$600','Daily earning potential']].map(([value,label]) => <article key={label}><strong>{value}</strong><p>{label}</p></article>)}</div><p className="details-note">Michigan full-time opportunity. The daily range describes earning potential, not guaranteed daily pay. Ask the hiring team about bonus eligibility, commission terms, how the hourly guarantee applies, and the earnings examples behind the range.</p><div className="careers-perks">{perks.map(({icon: Icon,title,text}) => <article key={title}><Icon size={24} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="section-wrap careers-time"><p className="eyebrow">MAKE ROOM FOR WHAT MATTERS</p><h2>TIME OFF. NOT AN AFTERTHOUGHT.</h2><p>Major holiday time off includes Easter, Mother&apos;s Day, Memorial Day weekend, July 4th, Labor Day weekend, Christmas, and New Year&apos;s. Halloween means an early close.</p><p className="details-note">Confirm the schedule and holiday arrangements for your shop with the hiring team.</p></section></>
}

export function CareersRole() {
  return <section id="open-role" className="section-wrap service-body careers-role"><div><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>BARBER / COSMETOLOGIST</h2><p>Full-time · Michigan · Day & evening shifts</p><h3>YOU BRING THE TALENT.</h3><ul className="service-options">{['An active Michigan barber or cosmetology license','People skills: listen, connect, and make clients feel at home','Confidence recommending add-on services','Flexibility and a team-first attitude','Fading and straight razor skills are a big plus'].map(item => <li key={item}><Check size={18} aria-hidden="true"/>{item}</li>)}</ul><h3>NEWLY LICENSED? LET’S GO.</h3><p>You don&apos;t need a full client book to get started. Bring your license, your enthusiasm, and a willingness to learn. We&apos;ll help you build your skills and your confidence.</p></div><aside className="careers-apply"><p className="eyebrow">A GREAT CUT STARTS WITH YOU</p><h2>JOIN THE CREW.</h2><p>Ready for great earning potential, a laid-back shop, and a team that supports you?</p><a className="button button-orange" href={applicationUrl}>APPLY NOW <ArrowUpRight size={17}/></a><p className="details-note">Continue to the official Hair Mechanix application. The hiring team can confirm current openings, compensation, and location-specific details.</p><a className="text-link" href="/locations">EXPLORE OUR SHOPS <ArrowUpRight size={16}/></a></aside></section>
}

export function CareersQuestions() {
  const questions = [
    ['Do I need experience?', 'Newly licensed barbers and cosmetologists are welcome. Training is available; fading and straight razor skills are a plus.'],
    ['What license do I need?', 'This Michigan opportunity requires an active Michigan barber or cosmetology license. For roles in other states, ask the hiring team about local requirements.'],
    ['What shifts are available?', 'Day and evening shifts are available. The advertised weekend schedule is Saturday 9–5 and Sunday 9–3; confirm your specific shop’s schedule during the hiring process.'],
    ['How does compensation work?', 'The offer includes up to 60% commission and a $20/hour guarantee plus tips while you build your book. Ask the hiring team to explain how these pay arrangements work together, sign-on bonus eligibility, and store performance bonuses. Daily earnings vary.'],
  ]
  return <section className="section-wrap details-section"><p className="eyebrow">BEFORE YOU PULL UP A CHAIR</p><h2>A FEW GOOD QUESTIONS.</h2><div className="detail-menu careers-faq">{questions.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
}
