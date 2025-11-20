'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/AdminHeader';
import UserTable from '@/components/UserTable';
import { User } from '@/types/user';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [deleteStatus, setDeleteStatus] = useState<{loading: boolean, error: string | null}>({
    loading: false,
    error: null
  });
 

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...');
        const response = await fetch('/api/admin/auth', {
          credentials: 'include', // Important: include cookies in the request
        });
        
        const data = await response.json();
        console.log('Auth response:', data);
        
        if (response.ok) {
          console.log('Authentication successful');
          setIsAuthenticated(true);
        } else {
          console.error('Authentication failed:', data.message);
          // Use window.location for a hard redirect
          window.location.href = '/admin/login';
        }
      } catch (err) {
        console.error('Authentication error:', err);
        // Use window.location for a hard redirect
        window.location.href = '/admin/login';
      }
    };

    checkAuth();
  }, []);

  // Fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      if (!isAuthenticated) return;
      
      setLoading(true);
      try {
        const response = await fetch('/api/admin/users', {
          credentials: 'include', // Important: include cookies in the request
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('API error:', errorData);
          
          if (response.status === 401) {
            // Authentication error, redirect to login
            window.location.href = '/admin/login';
            return;
          }
          
          throw new Error(errorData.message || 'Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data.users || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users. Please try again later.');
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  // Handle user deletion
  const handleDeleteUser = async (userId: string) => {
    // Check if user still exists in state (prevent double-delete)
    if (!users.find(user => user.id === userId)) {
      console.log('User already deleted from state');
      return;
    }
    
    setDeleteStatus({ loading: true, error: null });
    
    try {
      // Use the full URL to avoid localhost issues
      const baseUrl = window.location.origin;
      const url = `${baseUrl}/api/admin/users/${userId}`;
      
      console.log('Deleting user with ID:', userId);
      
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // If user not found, it might have been deleted already - just update UI
        if (response.status === 404) {
          console.log('User not found in database, removing from UI');
          setUsers(users.filter(user => user.id !== userId));
          setDeleteStatus({ loading: false, error: null });
          return;
        }
        
        throw new Error(data.message || 'Failed to delete user');
      }
      
      console.log('User deleted successfully');
      
      // Remove the user from the state
      setUsers(users.filter(user => user.id !== userId));
      setDeleteStatus({ loading: false, error: null });
    } catch (err) {
      console.error('Error deleting user:', err);
      setDeleteStatus({ 
        loading: false, 
        error: err instanceof Error ? err.message : 'Failed to delete user' 
      });
    }
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Authenticating...</div>;
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <AdminHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Waitlist Dashboard</h1>
          <p className="mt-2 text-sm text-blue-600">
            Manage and view all users who have signed up for the waitlist.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md border border-blue-100 p-6">
            <h2 className="text-lg font-medium text-blue-800">Total Signups</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {loading ? '...' : users.length}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-blue-100 p-6">
            <h2 className="text-lg font-medium text-blue-800">Last 7 Days</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {loading ? '...' : users.filter(user => {
                if (!user.createdAt) return false;
                try {
                  const userDate = new Date(user.createdAt);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return userDate >= weekAgo;
                } catch (e) {
                  return false;
                }
              }).length}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-blue-100 p-6">
            <h2 className="text-lg font-medium text-blue-800">Last 24 Hours</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {loading ? '...' : users.filter(user => {
                if (!user.createdAt) return false;
                try {
                  const userDate = new Date(user.createdAt);
                  const dayAgo = new Date();
                  dayAgo.setDate(dayAgo.getDate() - 1);
                  return userDate >= dayAgo;
                } catch (e) {
                  return false;
                }
              }).length}
            </p>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-blue-100">
          <div className="px-4 py-5 sm:px-6 border-b border-blue-200 bg-blue-50">
            <h3 className="text-lg font-medium leading-6 text-blue-800">
              Waitlist Users
            </h3>
            <p className="mt-1 text-sm text-blue-600">
              Complete list of users who have signed up for the waitlist.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">{error}</div>
          ) : (
            <>
              {deleteStatus.loading && (
                <div className="p-2 mb-4 text-center text-blue-600 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500 mr-2"></div>
                  Deleting user...
                </div>
              )}
              {deleteStatus.error && (
                <div className="p-2 mb-4 text-center text-red-500 bg-red-50 border border-red-200 rounded">
                  {deleteStatus.error}
                </div>
              )}
              <UserTable 
                users={users} 
                onDeleteUser={handleDeleteUser} 
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;