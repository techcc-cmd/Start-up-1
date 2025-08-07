import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'admin';
  phone?: string;
  specialization?: string; // for doctors
  department?: string; // for doctors and admin
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock users for demo
  const mockUsers: User[] = [
    {
      id: '1',
      name: 'John Patient',
      email: 'patient@trinity.com',
      role: 'patient',
      phone: '+1234567890'
    },
    {
      id: '2',
      name: 'Dr. Sarah Wilson',
      email: 'doctor@trinity.com',
      role: 'doctor',
      phone: '+1234567891',
      specialization: 'Cardiology',
      department: 'Cardiology'
    },
    {
      id: '3',
      name: 'Admin Trinity',
      email: 'admin@trinity.com',
      role: 'admin',
      phone: '+1234567892',
      department: 'Administration'
    }
  ];

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('trinityUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock authentication - in real app, this would be an API call
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (foundUser && (password === 'password' || password === '123456')) {
        setUser(foundUser);
        localStorage.setItem('trinityUser', JSON.stringify(foundUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Mock registration - in real app, this would be an API call
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: userData.role || 'patient',
        phone: userData.phone
      };

      if (userData.role === 'doctor') {
        newUser.specialization = userData.specialization;
        newUser.department = userData.department;
      }

      setUser(newUser);
      localStorage.setItem('trinityUser', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('trinityUser');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};