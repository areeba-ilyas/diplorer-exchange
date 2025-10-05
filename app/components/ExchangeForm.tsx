// app/components/ExchangeForm.tsx
'use client';
import React, { useState, useEffect } from 'react';

interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
}

const ExchangeForm = () => {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USDT');
  const [amount, setAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [networkFee, setNetworkFee] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Exchange rates data
  const exchangeRates: ExchangeRate[] = [
    { from: 'BTC', to: 'USDT', rate: 45000 },
    { from: 'ETH', to: 'USDT', rate: 3000 },
    { from: 'USDT', to: 'BTC', rate: 0.000022 },
    { from: 'USDT', to: 'ETH', rate: 0.00033 },
    { from: 'BTC', to: 'ETH', rate: 15 },
    { from: 'ETH', to: 'BTC', rate: 0.066 },
  ];

  // Get all unique currencies
  const allCurrencies = React.useMemo(() => {
    const currencies = new Set<string>();
    exchangeRates.forEach((item: ExchangeRate) => {
      currencies.add(item.from);
      currencies.add(item.to);
    });
    return Array.from(currencies);
  }, []);

  // Calculate fees and conversion
  const calculateExchange = () => {
    if (!amount || parseFloat(amount) <= 0) return;

    const rate = exchangeRates.find(
      (item: ExchangeRate) => item.from === fromCurrency && item.to === toCurrency
    )?.rate;

    if (rate) {
      const amountNum = parseFloat(amount);
      const serviceFeeAmount = amountNum * 0.01; // 1% service fee
      const networkFeeAmount = amountNum * 0.005; // 0.5% network fee
      const totalFees = serviceFeeAmount + networkFeeAmount;
      const amountAfterFees = amountNum - totalFees;
      const convertedValue = amountAfterFees * rate;

      setServiceFee(serviceFeeAmount.toFixed(6));
      setNetworkFee(networkFeeAmount.toFixed(6));
      setFinalAmount(amountAfterFees.toFixed(6));
      setConvertedAmount(convertedValue.toFixed(6));
    }
  };

  // Auto-calculate when inputs change
  useEffect(() => {
    calculateExchange();
  }, [amount, fromCurrency, toCurrency]);

  const handleExchange = async () => {
    if (!recipientAddress.trim()) {
      alert('Please enter recipient address');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter valid amount');
      return;
    }

    if (!convertedAmount) {
      alert('Please check the exchange rate');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success message
      alert(`Exchange successful!\n\nYou sent: ${amount} ${fromCurrency}\nYou received: ${convertedAmount} ${toCurrency}\nRecipient: ${recipientAddress}`);
      
      // Reset form
      setAmount('');
      setRecipientAddress('');
      setConvertedAmount('');
      setNetworkFee('');
      setServiceFee('');
      setFinalAmount('');
    } catch (error) {
      alert('Exchange failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate random address (for testing)
  const generateRandomAddress = () => {
    const chars = '0123456789ABCDEF';
    let address = '0x';
    for (let i = 0; i < 40; i++) {
      address += chars[Math.floor(Math.random() * 16)];
    }
    setRecipientAddress(address);
  };

  return (
    <div className="exchange-form max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Crypto Exchange</h2>
      
      <div className="space-y-4">
        {/* From Currency */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">From Currency</label>
          <select 
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {allCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* To Currency */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">To Currency</label>
          <select 
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {allCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Amount</label>
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            step="0.000001"
          />
        </div>

        {/* Recipient Address */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Recipient Address</label>
            <button 
              type="button"
              onClick={generateRandomAddress}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-gray-600"
            >
              Generate Test Address
            </button>
          </div>
          <input 
            type="text"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            placeholder="Enter recipient wallet address"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Calculation Results */}
        {convertedAmount && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Exchange Summary</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">You send:</span>
                <span className="font-medium">{amount} {fromCurrency}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Service fee (1%):</span>
                <span className="text-red-500">-{serviceFee} {fromCurrency}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Network fee (0.5%):</span>
                <span className="text-red-500">-{networkFee} {fromCurrency}</span>
              </div>
              
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-600">Amount after fees:</span>
                <span className="font-medium">{finalAmount} {fromCurrency}</span>
              </div>
              
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                <span className="text-gray-800">You receive:</span>
                <span className="text-green-600">{convertedAmount} {toCurrency}</span>
              </div>
            </div>
          </div>
        )}

        {/* Exchange Button */}
        <button 
          onClick={handleExchange}
          disabled={isLoading || !recipientAddress || !amount || !convertedAmount}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-semibold"
        >
          {isLoading ? 'Processing Exchange...' : 'Exchange Now'}
        </button>

        {/* Info */}
        <div className="text-xs text-gray-500 text-center">
          <p>1% service fee + 0.5% network fee applied</p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeForm;