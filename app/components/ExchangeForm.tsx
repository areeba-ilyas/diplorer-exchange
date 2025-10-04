"use client"

import { useEffect, useState } from "react"

interface RateItem {
  from: string
  to: string
  in: string
  out: string
  amount: string
  tofee: string
  minamount: string
  maxamount: string
}

export default function ExchangeForm() {
  const [rates, setRates] = useState<RateItem[]>([])
  const [currencies, setCurrencies] = useState<string[]>([])
  const [sendCurrency, setSendCurrency] = useState<string>("BTC")
  const [receiveCurrency, setReceiveCurrency] = useState<string>("ETH")
  const [amountToSend, setAmountToSend] = useState<string>("")
  const [calculatedReceive, setCalculatedReceive] = useState<string>("")
  const [showSendDropdown, setShowSendDropdown] = useState(false)
  const [showReceiveDropdown, setShowReceiveDropdown] = useState(false)

  // Fetch float rates every 5 seconds
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("/api/fixedfloat/rate-float")
        const data = await res.json()

        const items = Array.isArray(data?.rates?.item)
          ? data.rates.item
          : [data.rates.item]

        setRates(items)

        const allCurrencies = new Set<string>()
        items.forEach((item) => {
          allCurrencies.add(item.from)
          allCurrencies.add(item.to)
        })

        setCurrencies(Array.from(allCurrencies).sort())
      } catch (error) {
        console.error("Failed to fetch rates:", error)
      }
    }

    fetchRates()
    const interval = setInterval(fetchRates, 5000)
    return () => clearInterval(interval)
  }, [])

  // Recalculate receive amount on input or rate change
  useEffect(() => {
    if (!amountToSend) {
      setCalculatedReceive("")
      return
    }

    const rate = rates.find(
      (r) => r.from === sendCurrency && r.to === receiveCurrency
    )

    if (rate) {
      const result = parseFloat(amountToSend) * parseFloat(rate.out)
      setCalculatedReceive(result.toFixed(8))
    } else {
      setCalculatedReceive("Unavailable")
    }
  }, [amountToSend, sendCurrency, receiveCurrency, rates])

  // Find the selected rate object
  const selectedRate = rates.find(
    (r) => r.from === sendCurrency && r.to === receiveCurrency
  )

  return (
    <div className="max-w-xl mx-auto bg-white/10 p-6 rounded-lg shadow space-y-6 text-white">
      {/* Send Currency Dropdown */}
      <div className="relative">
        <label className="block text-sm font-medium mb-1">Send</label>
        <div
          onClick={() => setShowSendDropdown(!showSendDropdown)}
          className="cursor-pointer bg-white/5 border border-gray-600 px-4 py-3 rounded flex justify-between items-center"
        >
          {sendCurrency}
          <span>▼</span>
        </div>
        {showSendDropdown && (
          <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white text-black border rounded shadow-lg">
            {currencies.map((currency) => (
              <li
                key={currency}
                onClick={() => {
                  setSendCurrency(currency)
                  setShowSendDropdown(false)
                }}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {currency}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Amount Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amountToSend}
          onChange={(e) => setAmountToSend(e.target.value)}
          className="w-full bg-white/5 border border-gray-600 px-4 py-3 rounded text-white"
        />
      </div>

      {/* Receive Currency Dropdown */}
      <div className="relative">
        <label className="block text-sm font-medium mb-1">Receive</label>
        <div
          onClick={() => setShowReceiveDropdown(!showReceiveDropdown)}
          className="cursor-pointer bg-white/5 border border-gray-600 px-4 py-3 rounded flex justify-between items-center"
        >
          {receiveCurrency}
          <span>▼</span>
        </div>
        {showReceiveDropdown && (
          <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white text-black border rounded shadow-lg">
            {currencies.map((currency) => (
              <li
                key={currency}
                onClick={() => {
                  setReceiveCurrency(currency)
                  setShowReceiveDropdown(false)
                }}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {currency}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Calculated Receive Amount */}
      <div>
        <label className="block text-sm font-medium mb-1">You Receive</label>
        <input
          type="text"
          readOnly
          value={calculatedReceive}
          className="w-full bg-white/5 border border-gray-600 px-4 py-3 rounded text-white"
        />
      </div>

      {/* Floating Rate Info */}
      {selectedRate && (
        <div className="text-sm text-gray-300 space-y-1 mt-3">
          <div>
            Floating rate:{" "}
            <span className="text-white font-medium">{selectedRate.out}</span>
          </div>
          <div>
            Fee:{" "}
            <span className="text-white font-medium">{selectedRate.tofee}</span>
          </div>
          <div>
            Min:{" "}
            <span className="text-white font-medium">{selectedRate.minamount}</span>
          </div>
          <div>
            Max:{" "}
            <span className="text-white font-medium">{selectedRate.maxamount}</span>
          </div>
        </div>
      )}
    </div>
  )
}
