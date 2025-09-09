export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  location?: string;
  buyingFor?: string;
  createdAt: string;
  updatedAt?: string;
  
  // For backward compatibility with existing code
  name?: string;
  phone?: string;
  profession?: string;
  interests?: string[];
  message?: string;
}