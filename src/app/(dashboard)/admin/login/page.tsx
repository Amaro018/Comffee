
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'login',
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to the dashboard or another protected page after successful login
        router.push('/admin/dashboard');
      } else {
        // Show error message if login fails
        setError(data.message);
      }
    } catch (error) {
      // Handle errors like network issues
      setError('An unexpected error occurred. Please try again.');
    }
  };


  return (
    <div className='flex flex-col items-center p-16'>
    <img src="/images/logo.png" alt="Comfee" className='w-48'/>
    <h1 className='text-3xl p-2 font-bold text-gray-700'>ADMIN LOGIN</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 border-2 border-gray-400 p-4 rounded-xl w-1/4'>
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex flex-col gap-2'>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="outline outline-2 outline-gray-500 p-2 rounded border border-gray-300 focus:outline-gray-700"
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="outline outline-2 outline-gray-500 p-2 rounded border border-gray-300 focus:outline-gray-700"
        />
      </div>
      <button type="submit" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full'>Login</button>
    </form>
  </div>
  )
}

export default page