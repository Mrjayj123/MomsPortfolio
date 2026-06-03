// Lightweight FX fetch helper using a free, no-key API.
// Data source: exchangerate-api.com (https://www.exchangerate-api.com/)
// Note: For production you may prefer a server-side proxy + API provider.

export async function fetchFxRates({ base = 'USD', symbols = [] }) {
  if (!symbols.length) return { base, rates: {} }

  const url = `https://api.exchangerate-api.com/v4/latest/${base}`

  try {
    const res = await fetch(url, { method: 'GET' })
    if (!res.ok) {
      throw new Error(`FX fetch failed: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    if (!data || !data.rates) {
      throw new Error('FX fetch failed: invalid response')
    }

    // Filter rates to only include requested symbols
    const filteredRates = {}
    if (symbols.length > 0) {
      symbols.forEach((symbol) => {
        if (data.rates[symbol] !== undefined) {
          filteredRates[symbol] = data.rates[symbol]
        }
      })
    } else {
      Object.assign(filteredRates, data.rates)
    }

    return {
      base: data.base || base,
      rates: filteredRates,
      date: data.date,
    }
  } catch (error) {
    throw new Error(`FX fetch failed: ${error.message}`)
  }
}

