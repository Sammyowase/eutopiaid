import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
      });
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/admin" className="flex items-center">
                <svg 
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M12 12L12 16" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <circle 
                    cx="12" 
                    cy="9" 
                    r="1" 
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-white">Eutopia Admin</span>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/admin" 
                className="border-white text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link 
                href="/admin/export" 
                className="border-transparent text-blue-100 hover:border-blue-200 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Export Data
              </Link>
              <Link 
                href="/admin/settings" 
                className="border-transparent text-blue-100 hover:border-blue-200 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Settings
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={handleLogout}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Logout
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-700">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/admin"
              className="bg-blue-800 border-white text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/export"
              className="border-transparent text-blue-100 hover:bg-blue-800 hover:border-blue-200 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Export Data
            </Link>
            <Link
              href="/admin/settings"
              className="border-transparent text-blue-100 hover:bg-blue-800 hover:border-blue-200 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="mt-3 mx-3 mb-3 w-auto flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;