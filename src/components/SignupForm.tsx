'use client'

import React, { useState } from 'react';
import Button from './Button';

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  buyingFor: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    buyingFor: 'Self',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [alreadyOnWaitlist, setAlreadyOnWaitlist] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error states
    setFormError(null);
    setAlreadyOnWaitlist(false);
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Submit to the waitlist API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          location: formData.location,
          buyingFor: formData.buyingFor
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Special handling for already on waitlist error (status 409)
        if (response.status === 409) {
          console.log('User already on waitlist:', formData.email);
          setAlreadyOnWaitlist(true);
          // Still redirect to thank you page for good user experience
          window.location.href = `/thank-you?name=${encodeURIComponent(formData.fullName)}&existing=true`;
          return;
        }
        
        // Handle other errors
        setFormError(data.message || 'Failed to join waitlist');
        throw new Error(data.message || 'Failed to join waitlist');
      }
      
      // Successful submission - redirect to thank you page with the user's name
      window.location.href = `/thank-you?name=${encodeURIComponent(formData.fullName)}`;
    } catch (error) {
      console.error('Error submitting form:', error);
      if (!formError) {
        setFormError('There was an error submitting your information. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="card w-full max-w-md mx-auto p-6 md:p-8 slide-up shadow-xl border border-gray-100 bg-white/90 backdrop-blur-sm rounded-xl transition-all hover:shadow-2xl">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-red-100/30 to-red-200/20 rounded-full blur-xl"></div>
      </div>
      
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white p-5 -mt-12 mb-8 rounded-xl shadow-lg transform transition-transform hover:scale-[1.02] border border-blue-400/10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Join the Waitlist
        </h2>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[var(--deep-blue-light)] rotate-45"></div>
      </div>
      
      <p className="text-gray-600 mb-8 text-center relative z-10">
        Fill in your details to be first in line when we launch our life-saving medical bracelet.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Name field with icon */}
        <div className="slide-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all ${
                errors.fullName ? 'border-[var(--professional-red)] bg-red-50' : 'border-gray-300 bg-white'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-sm text-[var(--professional-red)] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.fullName}
            </p>
          )}
        </div>
        
        {/* Email field with icon */}
        <div className="slide-up" style={{ animationDelay: '200ms' }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all ${
                errors.email ? 'border-[var(--professional-red)] bg-red-50' : 'border-gray-300 bg-white'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-[var(--professional-red)] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
        
        {/* Phone field with icon */}
        <div className="slide-up" style={{ animationDelay: '300ms' }}>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all ${
                errors.phoneNumber ? 'border-[var(--professional-red)] bg-red-50' : 'border-gray-300 bg-white'
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-[var(--professional-red)] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.phoneNumber}
            </p>
          )}
        </div>
        
        {/* Two column layout for smaller fields on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location field with icon */}
          <div className="slide-up" style={{ animationDelay: '400ms' }}>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location (optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where are you based?"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all bg-white"
              />
            </div>
          </div>
          
          {/* Buying for field with icon */}
          <div className="slide-up" style={{ animationDelay: '500ms' }}>
            <label htmlFor="buyingFor" className="block text-sm font-medium text-gray-700 mb-2">
              Who are you buying for?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <select
                id="buyingFor"
                name="buyingFor"
                value={formData.buyingFor}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all bg-white appearance-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
              >
                <option value="Self">Self</option>
                <option value="Parent">Parent</option>
                <option value="Child">Child</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Submit button with enhanced styling */}
        <div className="mt-8 slide-up" style={{ animationDelay: '600ms' }}>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--professional-red)] to-[var(--professional-red-dark)] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Button 
              type="submit" 
              variant="secondary"
              className="relative w-full py-4 text-lg font-medium transition-all duration-200 transform group-hover:scale-[1.01]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                <span className="flex items-center justify-center">
                  Join Now
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </Button>
          </div>
          
          {/* Privacy note */}
          <p className="text-center text-xs text-gray-500 mt-4">
            By joining, you agree to our <a href="/terms" className="text-[var(--deep-blue-light)] hover:text-[var(--professional-red)] transition-colors">Terms of Service</a> and <a href="/privacy" className="text-[var(--deep-blue-light)] hover:text-[var(--professional-red)] transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;