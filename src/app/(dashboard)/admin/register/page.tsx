"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({type: 'register', name,username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User saved successfully:', data);
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        router.push('/admin/dashboard'); // Redirect to homepage after successful save
      } else {
        const errorData = await response.json();
        console.error('Failed to save user:', errorData.message);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='flex flex-col items-center p-8'>
      <img src="..\images\logo.png" alt="Logo" className='w-48'/>
      <h1 className='text-3xl p-2 font-bold text-gray-700'>ADMIN REGISTRATION</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 border-2 border-gray-400 p-4 rounded-xl w-1/4'>
        <div className='flex flex-col gap-2'>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="outline outline-2 outline-gray-500 p-2 rounded border border-gray-300 focus:outline-gray-700"
          />
        </div>

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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className='flex flex-col gap-2'>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="outline outline-2 outline-gray-500 p-2 rounded border border-gray-300 focus:outline-gray-700"
          />
        </div>
        <button type="submit" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full'>Save User</button>
      </form>
    </div>
  );
};

export default AdminPage;
