import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setEmail('');
      setPassword('');
    }
  };


  return (
    <div className='bg-white p-12 h-[100vh] absolute w-[100vw] '>
      <p className='text-3xl font-bold'>Expense Tracker</p>
      <div className='h-[80%] relative top-[20%] w-[50%]'>
        <p className='text-3xl font-bold'>Welcome Back</p>
        <p className='text-xs font-bold text-gray-600'>Please enter your details to login</p>

        <form onSubmit={handleSubmit}>
          <div>
            <p className='text-sm font-bold text-gray-600 pt-4'>Email Address</p>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              className='border-2 border-gray-300 bg-gray-100 w-[70%] mt-3.5 h-12 rounded p-2'
              required
            />
          </div>
          <div>
            <p className='text-sm font-bold text-gray-600 pt-4'>Password</p>
            <input
              type='password'
              value={password}
              onChange={handlePasswordChange}
              className='border-2 border-gray-300 bg-gray-100 w-[70%] mt-3.5 h-12 rounded p-2'
              required
            />
          </div>

          <button
            type='submit'
            className='text-xl bg-gray-400 text-white cursor-pointer font-bold rounded p-2 w-[70%] mt-3.5'>
            Login
          </button>

          {error && <p className='text-red-500 mt-3'>{error}</p>}
        </form>

        <p className='text-sm font-bold pt-5'>
          Don't have an account?{' '}
          <span
            className='text-black-500 underline cursor-pointer'
            onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
