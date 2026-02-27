export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer loop with gradient */}
          <defs>
            <linearGradient id="logoGradient1" x1="6" y1="6" x2="34" y2="34">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="logoGradient2" x1="12" y1="12" x2="28" y2="28">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
          {/* Outer loop */}
          <path 
            d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20" 
            stroke="url(#logoGradient1)" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          {/* Inner loop with arrow */}
          <path 
            d="M20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28C24.418 28 28 24.418 28 20C28 18" 
            stroke="url(#logoGradient2)" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          {/* Arrow pointing to loop */}
          <path 
            d="M30 20L34 16M34 16L30 12M34 16H28" 
            stroke="url(#logoGradient1)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          Loop<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT</span>
        </h1>
        <p className="text-xs text-gray-500">Device Trade-In</p>
      </div>
    </div>
  );
}