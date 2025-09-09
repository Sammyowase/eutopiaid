'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/AdminHeader';

const AdminSettings: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState({
    notificationsEnabled: true,
    emailNotifications: true,
    waitlistOpen: true,
    maxWaitlistSize: 1000,
    adminEmail: 'admin@eutopia.com',
  });
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth');
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          router.push('/admin/login');
        }
      } catch (err) {
        console.error('Authentication error:', err);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  // Fetch settings (in a real app, this would come from your database)
  useEffect(() => {
    if (isAuthenticated) {
      // This is a placeholder. In a real app, you would fetch settings from an API
      // For now, we'll just use the default values set in state
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      // In a real app, you would save settings to your database via an API
      // For now, we'll just simulate a successful save
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Settings saved successfully');
      setLoading(false);
    } catch (err) {
      console.error('Error saving settings:', err);
      setError('Failed to save settings. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Authenticating...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
          <p className="mt-2 text-sm text-gray-600">
            Configure your waitlist and notification preferences.
          </p>
        </div>

        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">{success}</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Waitlist Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Configure how your waitlist operates.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Waitlist Status */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  Waitlist Status
                </label>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  settings.waitlistOpen 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {settings.waitlistOpen ? 'Open' : 'Closed'}
                </span>
              </div>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="waitlistOpen"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    checked={settings.waitlistOpen}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Allow new signups</span>
                </label>
              </div>
            </div>

            {/* Max Waitlist Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Waitlist Size
              </label>
              <input
                type="number"
                name="maxWaitlistSize"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={settings.maxWaitlistSize}
                onChange={handleChange}
                min="1"
              />
              <p className="mt-1 text-xs text-gray-500">
                Set to 0 for unlimited waitlist size
              </p>
            </div>

            {/* Notification Settings */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-base font-medium text-gray-900 mb-4">Notification Settings</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="notificationsEnabled"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={settings.notificationsEnabled}
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700">Enable notifications for new signups</span>
                  </label>
                </div>
                
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={settings.emailNotifications}
                      onChange={handleChange}
                      disabled={!settings.notificationsEnabled}
                    />
                    <span className={`ml-2 ${!settings.notificationsEnabled ? 'text-gray-400' : 'text-gray-700'}`}>
                      Send email notifications
                    </span>
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    name="adminEmail"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={settings.adminEmail}
                    onChange={handleChange}
                    disabled={!settings.notificationsEnabled || !settings.emailNotifications}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Email address to receive notifications
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    loading 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : 'Save Settings'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;