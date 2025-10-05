"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [stats, setStats] = useState({
    exchanges: '1,234,567',
    currencies: '150+',
    users: '500K+'
  });

  const features = [
    {
      icon: '⚡',
      title: 'Instant Exchange',
      description: 'Get your crypto exchanged in minutes'
    },
    {
      icon: '🔒',
      title: 'Secure & Safe',
      description: 'Your funds are protected with advanced security'
    },
    {
      icon: '💎',
      title: 'Best Rates',
      description: 'We offer the most competitive rates in the market'
    },
    {
      icon: '🌍',
      title: 'Global Support',
      description: '24/7 customer support for all your needs'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                FIXED FLOAT
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</Link>
              <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Blog</Link>
              <Link href="/faq" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">FAQ</Link>
              <Link href="/api" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">API</Link>
              <Link href="/support" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Support</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/signin" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                Sign in
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Instant Cryptocurrency Exchange
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Exchange 150+ cryptocurrencies instantly with best rates. Fast, secure, and reliable platform trusted by millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/exchange" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-200"
            >
              Start Exchange
            </Link>
            <Link 
              href="/about" 
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">{stats.exchanges}</div>
              <div className="text-gray-600 dark:text-gray-400">Successful Exchanges</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">{stats.currencies}</div>
              <div className="text-gray-600 dark:text-gray-400">Supported Currencies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">{stats.users}</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Fixed Float?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Join thousands of satisfied users today
          </p>
          <Link 
            href="/signup" 
            className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-200"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Fixed Float</h3>
              <p className="text-gray-400">
                Fast, secure, and reliable cryptocurrency exchange platform.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/support" className="hover:text-white">Contact</Link></li>
                <li><Link href="/status" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/aml" className="hover:text-white">AML Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fixed Float. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}