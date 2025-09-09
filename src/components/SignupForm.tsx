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
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to thank you page with the user's name
      window.location.href = `/thank-you?name=${encodeURIComponent(formData.fullName)}`;
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Following design doc exactly:
  // - Form Page: 50% White, 30% Deep Blue, 20% Red
  // - Form Card: Soft slide-up with shadow fade
  // - Form Submission: Button shows minimalist loader (thin circular spinner)
  // - Success → quick green checkmark fade-in, smooth transition to thank you page
  return (
    <div className="card max-w-md mx-auto p-6 md:p-8 slide-up shadow-lg border border-[var(--deep-blue-light)] bg-white">
      <div className="bg-gradient-to-r from-[var(--deep-blue-dark)] to-[var(--deep-blue-light)] text-white p-4 -mt-8 mb-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">
          Join the Waitlist for Eutopia ID
        </h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        Fill in your details to be first in line when we launch.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="slide-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all ${
              errors.fullName ? 'border-[var(--professional-red)]' : 'border-gray-300'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-[var(--professional-red)]">{errors.fullName}</p>
          )}
        </div>
        
        <div className="slide-up" style={{ animationDelay: '200ms' }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all ${
              errors.email ? 'border-[var(--professional-red)]' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-[var(--professional-red)]">{errors.email}</p>
          )}
        </div>
        
        <div className="slide-up" style={{ animationDelay: '300ms' }}>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all ${
              errors.phoneNumber ? 'border-[var(--professional-red)]' : 'border-gray-300'
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-[var(--professional-red)]">{errors.phoneNumber}</p>
          )}
        </div>
        
        <div className="slide-up" style={{ animationDelay: '400ms' }}>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location (optional)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Where are you based?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all"
          />
        </div>
        
        <div className="slide-up" style={{ animationDelay: '500ms' }}>
          <label htmlFor="buyingFor" className="block text-sm font-medium text-gray-700 mb-1">
            Who are you buying for?
          </label>
          <select
            id="buyingFor"
            name="buyingFor"
            value={formData.buyingFor}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-blue-light)] focus:border-transparent transition-all"
          >
            <option value="Self">Self</option>
            <option value="Parent">Parent</option>
            <option value="Child">Child</option>
            <option value="Friend">Friend</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="mt-8 slide-up" style={{ animationDelay: '600ms' }}>
          <Button 
            type="submit" 
            variant="secondary" // Using red for CTA to match 20% red distribution
            className="w-full py-3 mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                {/* Minimalist loader (thin circular spinner) as specified in design */}
                <div className="w-5 h-5 border border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Processing...
              </div>
            ) : (
              'Join Now'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;