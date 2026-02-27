import { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { TradeInForm } from './components/TradeInForm';
import { HowItWorks } from './components/HowItWorks';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get Cash for Your Device
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Trade in your old devices for instant cash. Get a quote in minutes and we'll handle the rest.
          </p>
        </div>

        {/* Form Section */}
        <TradeInForm />

        {/* How It Works Section */}
        <HowItWorks />
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-600">
            © 2026 LoopIT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}