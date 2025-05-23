import { useState } from 'react';

const AuthForms = ({ mode, switchMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log(`${mode} form submitted`, formData);
  };

  return (
    <div className="auth-forms">
      {mode === 'login' ? (
        <div className="login-form" id="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <button onClick={switchMode}>Sign up</button></p>
        </div>
      ) : (
        <div className="signup-form" id="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={switchMode}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default AuthForms;