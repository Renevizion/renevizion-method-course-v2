import { useState } from 'react';
// Assuming PocketBase is initialized and available globally or imported.
// For this example, we'll use a placeholder for PocketBase interaction.
// In a real app, you might have: import PocketBase from 'pocketbase';
// const pb = new PocketBase('YOUR_POCKETBASE_URL');

const useWaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    setMessage('');

    if (!email) {
      setError('Email cannot be empty.');
      setStatus('error');
      return;
    }

    try {
      // Simulate PocketBase integration
      // In a real application, you would do something like:
      // const record = await pb.collection('waitlist_entries').create({ email });
      console.log('Simulating waitlist signup for:', email);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay

      setStatus('success');
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    } catch (err) {
      console.error('Waitlist signup error:', err);
      setError(err.message || 'Failed to join waitlist. Please try again.');
      setStatus('error');
    }
  };

  return {
    email,
    setEmail,
    handleSubmit,
    status,
    error,
    message,
  };
};

export default useWaitlistSignup;
