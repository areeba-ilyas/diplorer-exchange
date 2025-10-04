export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 py-8">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">API Documentation</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Integrate Diplorer's cryptocurrency exchange functionality directly into your applications 
              using our robust API.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                🔒 API Access Required
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                To get API access, please contact our team at <strong>api@diplorer.com</strong> 
                with your project details and use case.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Available Endpoints</h2>

            <div className="space-y-6">
              {/* Exchange Rate Endpoint */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-mono px-2 py-1 rounded">
                      GET
                    </span>
                    <code className="ml-2 text-lg font-semibold">/api/fixedfloat/coin-rate</code>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Get real-time exchange rates between cryptocurrencies with 2% commission included.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <code className="text-sm">
                    {`// Parameters\n`}
                    {`?from=BTC&to=ETH&amount=1.0&type=float\n\n`}
                    {`// Response\n`}
                    {`{\n`}
                    {`  "ok": true,\n`}
                    {`  "rates": [{\n`}
                    {`    "from": "BTC",\n`}
                    {`    "to": "ETH",\n`}
                    {`    "in": 1.0,\n`}
                    {`    "out": 15.32,\n`}
                    {`    "commissionRate": 0.02,\n`}
                    {`    "finalAmount": 15.01\n`}
                    {`  }]\n`}
                    {`}`}
                  </code>
                </div>
              </div>

              {/* Create Order Endpoint */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-mono px-2 py-1 rounded">
                      POST
                    </span>
                    <code className="ml-2 text-lg font-semibold">/api/fixedfloat/create-order</code>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Create a new cryptocurrency exchange order.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <code className="text-sm">
                    {`// Request Body\n`}
                    {`{\n`}
                    {`  "fromCurrency": "BTC",\n`}
                    {`  "toCurrency": "ETH",\n`}
                    {`  "fromAmount": 1.0,\n`}
                    {`  "toAddress": "0x...",\n`}
                    {`  "email": "user@example.com"\n`}
                    {`}\n\n`}
                    {`// Response\n`}
                    {`{\n`}
                    {`  "success": true,\n`}
                    {`  "order": {\n`}
                    {`    "id": "DPL123456",\n`}
                    {`    "fixedFloatId": "FF789012",\n`}
                    {`    "commission": {\n`}
                    {`      "rate": 0.02,\n`}
                    {`      "amount": 0.02\n`}
                    {`    }\n`}
                    {`  }\n`}
                    {`}`}
                  </code>
                </div>
              </div>

              {/* Track Order Endpoint */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-mono px-2 py-1 rounded">
                      GET
                    </span>
                    <code className="ml-2 text-lg font-semibold">/api/orders/track</code>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Track the status of an existing order.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <code className="text-sm">
                    {`// Parameters\n`}
                    {`?id=DPL123456&email=user@example.com\n\n`}
                    {`// Response\n`}
                    {`{\n`}
                    {`  "success": true,\n`}
                    {`  "order": {\n`}
                    {`    "id": "DPL123456",\n`}
                    {`    "status": "completed",\n`}
                    {`    "fromAmount": 1.0,\n`}
                    {`    "toAmount": 15.01\n`}
                    {`  }\n`}
                    {`}`}
                  </code>
                </div>
              </div>

              {/* Admin Orders Endpoint */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-mono px-2 py-1 rounded">
                      GET
                    </span>
                    <code className="ml-2 text-lg font-semibold">/api/admin/orders</code>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Admin endpoint to view all orders (requires authentication).
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <code className="text-sm">
                    {`// Response\n`}
                    {`{\n`}
                    {`  "success": true,\n`}
                    {`  "orders": [...],\n`}
                    {`  "stats": {\n`}
                    {`    "totalOrders": 156,\n`}
                    {`    "totalCommission": 2.8\n`}
                    {`  }\n`}
                    {`}`}
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Commission Structure</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>2% Service Commission</strong> applied to all exchanges</li>
                <li>Commission automatically calculated and deducted</li>
                <li>Transparent commission breakdown in all API responses</li>
                <li>Real-time commission tracking in admin panel</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Request API Access</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Contact us at api@diplorer.com with your project details
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Receive API Credentials</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We'll provide you with API keys and documentation
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Start Integrating</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Use our endpoints to integrate exchange functionality
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Need Help?</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-3">
                Our technical team is available to assist with integration and answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:api@diplorer.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center transition duration-200">
                  Email API Team
                </a>
                <a href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg text-center transition duration-200">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 