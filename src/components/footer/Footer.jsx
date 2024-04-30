import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-900 text-white py-12 md:py-16">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div className="flex flex-col items-start">
        <a className="inline-flex items-center space-x-2 mb-4" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-yellow-500">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <span className="text-2xl font-bold">Namma Irani Chai</span>
        </a>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
          Discover the authentic flavors of South India with our delectable Irani chai and traditional snacks.
        </p>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <nav className="space-y-2">
          <a className="text-gray-400 hover:text-white" href="#">
            About
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            Menu
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a className="text-gray-400 hover:text-white" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 md:mt-12 text-center text-gray-400 text-sm">© 2024 Namma Irani Chai. All rights reserved.</div>
  </div>
</footer>

  )
}

export default Footer