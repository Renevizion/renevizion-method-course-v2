import { useState, useEffect } from 'react';
// Assuming PocketBase is initialized and available globally or imported.
// For this example, we'll use a placeholder for PocketBase interaction.
// In a real app, you might have: import PocketBase from 'pocketbase';
// const pb = new PocketBase('YOUR_POCKETBASE_URL');

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate PocketBase initialization and re-authentication
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // In a real PocketBase app, you'd check for an existing session:
        // if (pb.authStore.isValid && pb.authStore.model) {
        //   setUser(pb.authStore.model);
        // }
        console.log('Simulating auth initialization...');
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate async check

        // For demonstration, let's assume no user is logged in initially.
        setUser(null); 
      } catch (err) {
        console.error('Auth initialization error:', err);
        setError(err.message || 'Failed to initialize authentication.');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // In a real PocketBase setup, you'd listen for auth store changes:
    // const unsubscribe = pb.authStore.onChange(() => {
    //   setUser(pb.authStore.model);
    // });
    // return () => unsubscribe();
  }, []);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate PocketBase login
      // const authData = await pb.collection('users').authWithPassword(username, password);
      console.log('Simulating login for:', username);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay

      if (username === 'admin' && password === 'password') { // Dummy credentials
        const dummyUser = { id: 'admin123', email: 'admin@example.com', username: 'admin' };
        setUser(dummyUser);
        return dummyUser;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate PocketBase logout
      // pb.authStore.clear();
      console.log('Simulating logout...');
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate async delay
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
      setError(err.message || 'Logout failed.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    login,
    logout,
  };
};

export default useAuth;
