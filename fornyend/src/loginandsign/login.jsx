import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      alert("Login Successful!");
      window.location.href = '/';
    } catch (err) {
      alert("Login Failed: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  const handleClose = () => {
    // Yahan aap apni logic daal sakte hain (e.g., setOpen(false))
    console.log("Close button clicked");
  };

  return (
    <div style={styles.container}>
      {/* Close Button */}
      <button style={styles.closeBtn} onClick={handleClose}>&times;</button>
      
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="email" 
          placeholder="Email" 
          style={styles.input}
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          style={styles.input}
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

// Simple Styles
const styles = {
  container: {
    position: 'relative',
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Login;