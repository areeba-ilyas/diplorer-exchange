"use client";
import { useState, useEffect } from 'react';

export default function ExchangePage() {
  const [fromAmount, setFromAmount] = useState('1.0');
  const [toAmount, setToAmount] = useState('0.0');
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('ETH');
  const [destination, setDestination] = useState('');
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch exchange rate
  const fetchRate = async () => {
    try {
      const response = await fetch(`/api/fixedfloat/coin-rate?from=${fromCurrency}&to=${toCurrency}&amount=${fromAmount}`);
      const data = await response.json();
      if (data.ok) {
        setRate(data.rates[0]?.finalRate || 0);
        setToAmount(data.rates[0]?.finalAmount || '0');
      }
    } catch (error) {
      console.error('Error fetching rate:', error);
    }
  };

  useEffect(() => {
    if (fromAmount && fromCurrency && toCurrency) {
      fetchRate();
    }
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleExchange = async () => {
    if (!destination) {
      alert('Please enter destination address');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/fixedfloat/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromCurrency,
          toCurrency,
          fromAmount: parseFloat(fromAmount),
          toAddress: destination,
          email: 'user@example.com' // You can get this from user input
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert(`Order created successfully! Order ID: ${data.order.id}`);
        // Redirect to track order page
        window.location.href = `/track-order?id=${data.order.id}`;
      } else {
        alert('Failed to create order: ' + data.error);
      }
    } catch (error) {
      alert('Error creating order');
    } finally {
      setLoading(false);
    }
  };

  const popularCurrencies = ['BTC', 'ETH', 'USDT', 'ADA', 'DOT', 'SOL'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-8">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Lightning Cryptocurrency Exchange
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fast, secure, and reliable crypto exchanges with 2% commission
          </p>
        </div>

        {/* Exchange Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Send Section */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
              Send
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="number" 
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold"
                placeholder="0.0"
              />
              <select 
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
              >
                {popularCurrencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Exchange Arrow */}
          <div className="flex justify-center my-4">
            <div className="bg-blue-500 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
          </div>

          {/* Receive Section */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
              Receive
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={toAmount}
                readOnly
                className="flex-1 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white text-lg font-semibold"
              />
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
              >
                {popularCurrencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
            {rate > 0 && (
              <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                1 {fromCurrency} = {rate.toFixed(6)} {toCurrency} (Includes 2% commission)
              </div>
            )}
          </div>

          {/* Destination Address */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
              Destination Address
            </label>
            <input 
              type="text" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={`Enter your ${toCurrency} address`}
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Exchange Button */}
          <button 
            onClick={handleExchange}
            disabled={loading || !destination}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Exchange Now'
            )}
          </button>

          {/* Commission Info */}
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Includes 2% service commission • Fast & Secure
          </div>
        </div>
      </div>
    </div>
  );
}