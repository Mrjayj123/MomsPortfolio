import { useEffect, useMemo, useRef, useState } from 'react'
import { fetchFxRates } from './fxRates'

const DEFAULT_SYMBOLS = ['USD', 'EUR', 'GBP', 'JPY', 'CAD']

function formatRate(value) {
  // value is how many quote currency units per 1 base unit.
  if (value === undefined || value === null || Number.isNaN(Number(value))) return '—'
  const n = Number(value)
  // Keep it readable across currencies
  if (Math.abs(n) >= 100) return n.toFixed(2)
  if (Math.abs(n) >= 10) return n.toFixed(3)
  return n.toFixed(4)
}

export default function MarketPricesBar({
  title = 'Live market prices',
  symbols = DEFAULT_SYMBOLS,
  base = 'USD',
  refreshMs = 15000,
}) {
  const normalizedSymbols = useMemo(() => {
    const unique = Array.from(new Set([base, ...symbols]))
    // Keep base first for nicer reading
    return [base, ...unique.filter((s) => s !== base)]
  }, [base, symbols])

  const [rates, setRates] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    let mounted = true

    async function load() {
      try {
        setError(null)
        setLoading(true)
        const { rates: nextRates } = await fetchFxRates({
          base,
          symbols: normalizedSymbols,
        })

        if (!mounted) return
        setRates(nextRates)
      } catch (e) {
        if (!mounted) return
        setError(e?.message || 'Failed to load rates')
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    }

    load()
    intervalRef.current = window.setInterval(load, refreshMs)

    return () => {
      mounted = false
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [base, normalizedSymbols, refreshMs])

  const marqueeItems = normalizedSymbols.map((sym) => {
    const value = sym === base ? 1 : rates[sym]
    return (
      <span key={sym} className='inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/90'>
        <span className='text-cyan-200/90'>{sym}</span>
        <span className='text-white/80'> {formatRate(value)} </span>
      </span>
    )
  })

  return (
    <div className='relative z-10'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-cyan-200/10 via-white/0 to-purple-200/10 blur-2xl' />

      <section aria-label={title} className='mt-2 mb-6 overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/55 backdrop-blur-xl'>
        <div className='px-4 py-3 flex items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <div className='h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]' />
            <div>
              <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/80'>Live market</p>
              <p className='text-sm font-semibold text-white/90'>FX rates (base: {base})</p>
            </div>
          </div>

          <div className='text-right'>
            {loading && <p className='text-xs text-slate-200/80'>Updating…</p>}
            {!loading && error && <p className='text-xs text-rose-200/80'>⚠ {error}</p>}
            {!loading && !error && <p className='text-xs text-slate-200/80'>Refreshing every {Math.round(refreshMs / 1000)}s</p>}
          </div>
        </div>

        <div className='-mt-1 pb-4'>
          <div className='fx-marquee flex whitespace-nowrap gap-3 px-4'>
            <div className='flex items-center gap-3'>
              {marqueeItems}
              {marqueeItems}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

