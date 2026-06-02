import { useRef, useState } from 'react'
import MarketPricesBar from './MarketPricesBar.jsx'

const contactDetails = [
  {
    type: 'Phone',
    label: '+254725683922',
    href: 'tel:+254725683922',
    value: '+254725683922',
  },
  {
    type: 'Email',
    label: 'tabymaguke@gmail.com',
    href: 'mailto:tabymaguke@gmail.com',
    value: 'tabymaguke@gmail.com',
  },
  {
    type: 'Calendly',
    label: 'Book through Calendly',
    href: 'https://calendly.com',
    value: 'Open Calendly',
  },
]

const experienceHighlights = [
  {
    institution: 'ABSA',
    role: 'Relationship Manager',
    achievement: 'Managed client relationships and delivered tailored banking solutions with a strong focus on retention and service excellence.',
  },
  {
    institution: 'I&M Bank',
    role: 'Senior Relationship Manager',
    achievement: 'Led high-value client portfolios, supported portfolio growth, and maintained strong long-term banking partnerships.',
  },
  {
    institution: 'Banking Leadership',
    role: 'Client Advisory & Service Excellence',
    achievement: 'Built trusted advisory relationships, strengthened customer engagement, and consistently supported financial goal achievement.',
  },
]

const bankingInsights = [
  {
    title: 'Credit strategy',
    text: 'Optimized loan and overdraft decisions that support growth without overleveraging.',
  },
  {
    title: 'Wealth and savings',
    text: 'Designing savings plans, cash buffers, and working capital for future needs.',
  },
  {
    title: 'Digital banking',
    text: 'Helping clients use banking tools securely and efficiently for everyday finance.',
  },
  {
    title: 'Risk review',
    text: 'Practical guidance to manage cash flow, rates, and financial exposure clearly.',
  },
]

const trendingTopics = [
  {
    title: 'Interest cost planning',
    text: 'Understand how rate changes may affect loan affordability and your next financial steps.',
  },
  {
    title: 'Savings resilience',
    text: 'Build cash buffers and liquidity plans that protect your personal or business finances.',
  },
  {
    title: 'Digital banking safety',
    text: 'Learn how secure, efficient digital tools can save time while protecting your money.',
  },
]

const faqItems = [
  {
    question: 'What should I prepare for a banking consultation?',
    answer: 'Bring your current goals, existing credit or savings structures, and any service pain points so the conversation is focused and practical.',
  },
  {
    question: 'How can a banker help with loan or credit decisions?',
    answer: 'A banker can review your borrowing options, help you compare costs, and align credit solutions with your cash flow and growth plans.',
  },
  {
    question: 'Why is digital banking guidance important?',
    answer: 'Digital banking tools can simplify everyday finance, improve security, and keep you connected to the right financial services faster.',
  },
]

function App() {
  const scheduleRef = useRef(null)
  const [activeFaq, setActiveFaq] = useState(null)

  const goToSchedule = () => {
    scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='relative isolate overflow-hidden'>
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.24),transparent_28%),radial-gradient(circle_at_70%_5%,rgba(168,85,247,0.18),transparent_24%)]' />

      <div className='min-h-screen px-6 py-8 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-6xl'>
          <header id='top' className='min-h-[68vh] flex items-center'>
            <div className='w-full px-4'>
              <div className='flex items-center justify-between mb-8'>
                <p className='inline-flex rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100/90'>
                  Tabither Maguke
                </p>

                <div className='flex gap-3'>
                  <button
                    onClick={goToSchedule}
                    className='inline-flex items-center justify-center rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200'
                  >
                    Schedule now
                  </button>
                  <a href='#overview' className='inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10'>
                    Explore services
                  </a>
                </div>
              </div>

              <div className='mx-auto max-w-3xl text-center'>
                <h1 className='text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl'>
                  Financial clarity for professionals.
                </h1>
                <p className='mt-4 text-base leading-7 text-slate-200/85 sm:text-lg'>
                  Hello, I'm Tabither, a seasoned personal banker with over two decades experience in the banking industry. I specialize in providing tailored financial guidance and support to help you achieve your goals with confidence and clarity.
                </p>

                <div className='mt-6 flex items-center justify-center gap-4'>
                  <a href='#overview' className='inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10'>
                    Services
                  </a>
                  <a href='#contact' className='inline-flex items-center justify-center rounded-full bg-slate-900/60 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-slate-900/80'>
                    Contact
                  </a>
                </div>

                <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-3xl bg-slate-950/60 p-5'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>About</p>
                    <p className='mt-2 text-sm text-slate-300/85'>Tabither combines deep banking experience with a personal, client-centered approach to help you choose the right financial path, manage risk, and prepare for what comes next.</p>
                  </div>
                  <div className='rounded-3xl bg-slate-950/60 p-5'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Quick services</p>
                    <p className='mt-2 text-sm text-slate-300/85'>Tailored planning, consultation prep, client-first service and actionable insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className='mt-8 rounded-[30px] bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
            <div className='space-y-9 text-center'>
              <div className='space-y-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Real-time market data</p>
                <h2 className='text-3xl font-semibold text-white sm:text-3xl'>Live currency rates at a glance</h2>
                <p className='max-w-2xl mx-auto text-sm leading-6 text-slate-200/80'>Stay informed with up-to-date FX rates refreshing every 15 seconds, helping you make informed financial decisions.</p>
              </div>
              <MarketPricesBar 
                base='USD' 
                symbols={['EUR', 'GBP', 'JPY', 'CAD', 'KES']} 
                refreshMs={15000}
              />
            </div>
          </section>

          <section id='about' className='mt-6 rounded-[30px] bg-white/5 p-6 backdrop-blur-xl sm:p-7'>
            <div className='md:flex md:items-center md:gap-6'>
              <div className='flex-shrink-0 mx-auto md:mx-0'>
                <img
                  src='/tabither.jpg'
                  alt='Tabither'
                  className='rounded-full object-cover border border-white/10 shadow-sm'
                  style={{ width: 500, height: 500 }}
                />
              </div>

              <div className='mt-4 md:mt-20 space-y-10 text-center md:text-left'>
                <p className=' text-[20px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80 text-center'>About Tabither</p>
                <h2 className='text-3xl font-semibold text-white'>A trusted banking partner for confident decisions</h2>
                <p className='max-w-2xl text-sm leading-7 text-slate-200/80'>
                  I combine deep banking experience with a personal, client-centered approach to help you choose the right financial path, manage risk, and prepare for what comes next.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-6 rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
            <div className='space-y-5'>
              <div className='space-y-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Where Tabither has worked</p>
                <h2 className='text-2xl font-semibold text-white sm:text-3xl'>Institutions, leadership, and achievements</h2>
                <p className='max-w-2xl text-sm leading-6 text-slate-200/80'>Across banking roles, Tabither has built strong client relationships, managed high-value portfolios, and delivered business-focused financial support.</p>
              </div>

              <div className='grid gap-4 md:grid-cols-3'>
                {experienceHighlights.map((item) => (
                  <article
                    key={item.institution}
                    className='rounded-3xl border border-white/10 bg-slate-950/65 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-950/80 hover:shadow-[0_18px_50px_rgba(14,116,144,0.22)]'
                  >
                    <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/70'>{item.institution}</p>
                    <h3 className='mt-3 text-lg font-semibold text-white'>{item.role}</h3>
                    <p className='mt-2 text-sm leading-6 text-slate-300/85'>{item.achievement}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className='mt-6 rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
            <div className='space-y-5'>
              <div className='space-y-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Banking insights</p>
                <h2 className='text-2xl font-semibold text-white sm:text-3xl'>Practical industry focus for better decision making</h2>
                <p className='max-w-2xl text-sm leading-6 text-slate-200/80'>Explore the key areas where Tabither helps clients translate banking expertise into everyday financial confidence.</p>
              </div>

              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                {bankingInsights.map((item) => (
                  <article key={item.title} className='rounded-3xl border border-white/10 bg-slate-950/65 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-950/80'>
                    <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-slate-300/85'>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className='mt-6 rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
            <div className='space-y-5'>
              <div className='space-y-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Trending banking topics</p>
                <h2 className='text-2xl font-semibold text-white sm:text-3xl'>Keep up with what matters now</h2>
                <p className='max-w-2xl text-sm leading-6 text-slate-200/80'>Short briefs that help clients understand current banking priorities and practical next steps.</p>
              </div>

              <div className='grid gap-4 md:grid-cols-3'>
                {trendingTopics.map((item) => (
                  <article key={item.title} className='rounded-3xl border border-white/10 bg-slate-950/65 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-950/80'>
                    <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-slate-300/85'>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className='mt-6 rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
            <div className='space-y-5'>
              <div className='space-y-2'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>FAQ</p>
                <h2 className='text-2xl font-semibold text-white sm:text-3xl'>Common banking questions answered</h2>
                <p className='max-w-2xl text-sm leading-6 text-slate-200/80'>Frequently asked questions to help visitors understand the value of working with Tabither and banking guidance.</p>
              </div>

              <div className='space-y-3'>
                {faqItems.map((item, index) => (
                  <button
                    key={item.question}
                    type='button'
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className='w-full rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-300/40 hover:bg-slate-950/80'
                  >
                    <div className='flex items-center justify-between gap-4'>
                      <span className='text-base font-semibold text-white'>{item.question}</span>
                      <span className='text-cyan-300'>{activeFaq === index ? '−' : '+'}</span>
                    </div>
                    {activeFaq === index && (
                      <p className='mt-4 text-sm leading-6 text-slate-300/85'>{item.answer}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <main className='mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
            <section id='overview' className='rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
              <div className='space-y-6'>
                <div className='flex flex-wrap gap-2 text-xs font-medium text-cyan-100/90'>
                  <span className='rounded-full bg-white/10 px-3 py-1'>10+ years experience</span>
                  <span className='rounded-full bg-white/10 px-3 py-1'>Trusted advisor</span>
                  <span className='rounded-full bg-white/10 px-3 py-1'>Consultation-ready</span>
                </div>

                <div className='space-y-3'>
                  <h2 className='text-2xl font-semibold text-white sm:text-3xl'>Personal banking expertise with a premium feel</h2>
                  <p className='max-w-2xl text-sm leading-7 text-slate-200/80 sm:text-base'>
                    Focused support for high-level guidance, structured financial planning, and thoughtful client conversations in a polished digital presence.
                  </p>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  {[
                    { title: 'Tailored planning', text: 'Customized support for your goals, cash flow, and next moves.' },
                    { title: 'Consultation prep', text: 'Clear agendas and follow-up notes for each session.' },
                    { title: 'Client-first service', text: 'Responsive communication with a steady, experienced touch.' },
                    { title: 'Actionable insights', text: 'Simple recommendations you can act on confidently.' },
                  ].map((item) => (
                    <div key={item.title} className='rounded-3xl border border-white/10 bg-slate-950/60 p-5'>
                      <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                      <p className='mt-2 text-sm leading-6 text-slate-300/85'>{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className='rounded-3xl border border-cyan-300/20 bg-cyan-400/10 p-5 text-white'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Consultation highlight</p>
                  <p className='mt-2 text-sm leading-6 text-cyan-50/95'>
                    Every conversation is structured to make financial decisions feel focused, practical, and secure.
                  </p>
                </div>
              </div>
            </section>

            <aside id='consultation' className='rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
              <div className='space-y-5'>
                <div className='rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-5'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Financial consultations</p>
                  <h2 className='mt-3 text-2xl font-semibold text-white sm:text-3xl'>Build a smarter roadmap.</h2>
                  <p className='mt-2 text-sm leading-6 text-slate-200/80'>
                    Meet with a seasoned banker to review next steps, strengthen confidence, and align planning with real-life priorities.
                  </p>
                </div>

                <div className='rounded-3xl border border-white/10 bg-slate-950/60 p-5'>
                  <h3 className='text-lg font-semibold text-white'>What clients receive</h3>
                  <ul className='mt-4 space-y-3 text-sm text-slate-300/85'>
                    <li className='flex gap-3'>
                      <span className='mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300' />
                      Personalized consultation agenda and follow-up note.
                    </li>
                    <li className='flex gap-3'>
                      <span className='mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300' />
                      Clear financial recommendations with actionable next steps.
                    </li>
                    <li className='flex gap-3'>
                      <span className='mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300' />
                      Ongoing support and simple communication for every stage.
                    </li>
                  </ul>
                </div>

                <div className='rounded-3xl border border-white/10 bg-slate-950/60 p-5'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-200/70'>Ready to connect?</p>
                  <p className='mt-2 text-sm leading-6 text-slate-200/80'>
                    Schedule a complimentary consultation to discuss your current priorities and long-term goals.
                  </p>
                </div>

                <div className='grid gap-3 sm:grid-cols-2'>
              
                  <a href='#overview' className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10'>
                    Learn more
                  </a>
                </div>
              </div>
            </aside>
          </main>

          <section ref={scheduleRef} id='contact' className='mt-6 rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-7'>
            <div className='space-y-6'>
              <div className='rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-5'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Schedule now</p>
                <h2 className='mt-3 text-2xl font-semibold text-white sm:text-3xl'>One place for contact and booking</h2>
                <p className='mt-2 text-sm leading-6 text-slate-200/80'>
                  This section is now built into the main page so you can review contact details and book a consultation without navigating away.
                </p>
              </div>

              <div className='grid gap-4 md:grid-cols-3'>
                {contactDetails.map((detail) => (
                  <a
                    key={detail.type}
                    href={detail.href}
                    target={detail.type === 'Calendly' ? '_blank' : undefined}
                    rel={detail.type === 'Calendly' ? 'noreferrer' : undefined}
                    className='rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-300/40 hover:bg-slate-950/80'
                  >
                    <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>{detail.type}</p>
                    <p className='mt-2 text-lg font-semibold text-white'>{detail.label}</p>
                    <p className='mt-1 text-sm text-slate-300/85'>{detail.value}</p>
                  </a>
                ))}
              </div>

              <div className='rounded-3xl border border-white/10 bg-slate-950/60 p-5'>
                <p className='text-sm text-slate-300/85'>Prefer a direct conversation? Use the phone or email details above, or open Calendly to set up a time that works for you.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
