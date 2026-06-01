// Lightweight FX fetch helper using a free, no-key API.
// Data source: exchangerate.host (https://exchangerate.host/)
// Note: For production you may prefer a server-side proxy + API provider.

export async function fetchFxRates({ base = 'USD', symbols = [] }) {
  if (!symbols.length) return { base, rates: {} }

  const params = new URLSearchParams()
  params.set('base', base)
  // exchangerate.host supports `symbols` as comma-separated.
  params.set('symbols', symbols.join(','))

  const url = `https://api.exchangerate.host/latest?${params.toString()}`

  const res = await fetch(url, { method: 'GET' })
  if (!res.ok) {
    throw new Error(`FX fetch failed: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()
  if (!data || data.success === false) {
    throw new Error('FX fetch failed: invalid response')
  }

  return {
    base: data.base || base,
    rates: data.rates || {},
    date: data.date,
  }
}

