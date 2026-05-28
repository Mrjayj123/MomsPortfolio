function App() {
  return (
    <div className='relative isolate overflow-hidden'>
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.24),transparent_28%),radial-gradient(circle_at_70%_5%,rgba(168,85,247,0.18),transparent_24%)]' />

      <div className='min-h-screen px-6 py-8 sm:px-8 lg:px-10'>
        <div className='mx-auto max-w-6xl'>
          <header className='rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(11,18,32,0.45)] backdrop-blur-xl sm:p-8'>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
              <div className='space-y-6'>
                <p className='inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100/90'>
                  Tabither Maguke
                </p>
                <div className='space-y-4'>
                  <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
                    Financial clarity for professionals.
                  </h1>
                  <p className='max-w-2xl text-base leading-7 text-slate-200/85 sm:text-lg'>
                    Hello, I'm Taabither, a seasoned personal banker presenting a calm, premium portfolio with a glass morph aesthetic, dedicated consultation messaging, and room to grow into a full site.
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-3 sm:flex-row lg:flex-col'>
                <a href='#consultation' className='inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200'>
                  Book a consultation
                </a>
                <a href='#overview' className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10'>
                  Explore services
                </a>
              </div>
            </div>
          </header>

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
                  <a href='#consultation' className='inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200'>
                    Schedule now
                  </a>
                  <a href='#overview' className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10'>
                    Learn more
                  </a>
                </div>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
