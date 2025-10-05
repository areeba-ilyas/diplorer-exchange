// app/page.tsx - Professional FixedFloat clone
"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FIXED FLOAT
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">About</Link>
              <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Blog</Link>
              <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">FAQ</Link>
              <Link href="/support" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Support</Link>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/signin" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Sign In</Link>
              <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Instant Cryptocurrency <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exchange</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Exchange 150+ cryptocurrencies instantly with the best rates. Fast, secure, and reliable platform trusted by millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/exchange" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Exchange
            </Link>
            <Link href="/learn" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200">
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1,234,567+</div>
              <div className="text-gray-600 dark:text-gray-400">Successful Exchanges</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-400">Supported Currencies</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">500K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Fixed Float?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Instant Exchange</h3>
              <p className="text-gray-600 dark:text-gray-400">Get your crypto exchanged in minutes with our automated system</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Safe</h3>
              <p className="text-gray-600 dark:text-gray-400">Your funds are protected with advanced security measures and cold storage</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Best Rates</h3>
              <p className="text-gray-600 dark:text-gray-400">Get the most competitive rates across 150+ cryptocurrencies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}