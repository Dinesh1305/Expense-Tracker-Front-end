import React, { useState } from 'react';
import '../styles/AuthForm.css';

export default function SignUpForm({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all the fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }
    setSuccess('Sign up successful! You can now log in.');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="signup-username">Username</label>
        <input
          id="signup-username"
          type="text"
          placeholder="Your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
          id="signup-confirm-password"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="toggle-text">
        Already have an account?&nbsp;
        <button onClick={onSwitch}>Log In</button>
      </div>
    </>
  );
}
