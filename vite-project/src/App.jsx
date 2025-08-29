import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './styles/AuthForm.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="app-container">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUpForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
