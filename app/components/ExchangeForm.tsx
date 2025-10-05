// app/components/ExchangeForm.tsx
import React, { useState } from 'react';

// Type define karein
interface ExchangeItem {
  from: string;
  to: string;
  rate: number;
}

const ExchangeForm = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Sample data with proper typing
  const exchangeRates: ExchangeItem[] = [
    { from: 'USD', to: 'EUR', rate: 0.85 },
    { from: 'EUR', to: 'USD', rate: 1.18 },
    { from: 'USD', to: 'GBP', rate: 0.73 },
    { from: 'GBP', to: 'USD', rate: 1.37 },
    { from: 'USD', to: 'JPY', rate: 110.25 },
    { from: 'EUR', to: 'GBP', rate: 0.86 },
  ];

  // ERROR FIX: exchangeRates use karein, items nahi
  const allCurrencies = new Set<string>()
  exchangeRates.forEach((item: ExchangeItem) => {
    allCurrencies.add(item.from)
    allCurrencies.add(item.to)
  })

  const handleConvert = () => {
    // Conversion logic
    const rate = exchangeRates.find(
      (item: ExchangeItem) => item.from === fromCurrency && item.to === toCurrency
    )?.rate;

    if (rate && amount) {
      const result = (parseFloat(amount) * rate).toFixed(2);
      setConvertedAmount(result);
    } else {
      alert('Exchange rate not available for selected currencies');
    }
  };

  return (
    <div className="exchange-form max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Currency Exchange</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">From Currency</label>
          <select 
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {Array.from(allCurrencies).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">To Currency</label>
          <select 
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {Array.from(allCurrencies).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button 
          onClick={handleConvert}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Convert
        </button>

        {convertedAmount && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-lg font-semibold text-green-800">
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeForm;