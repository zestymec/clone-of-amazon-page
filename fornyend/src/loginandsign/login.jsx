import { useState } from 'react';
import axios from 'axios';

const Login = ({ onClose }) => { // Prop receive kiya
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.username);
      alert("Login Successful! Welcome " + res.data.username);
      window.location.reload();
    } catch (err) {
      // Backend se jo message ayega (e.g., "Not exist"), wo alert mein dikhega
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.closeBtn} onClick={onClose}>&times;</button>
      
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Type email se text kar diya taake validation error na aaye */}
        <input 
          type="text" 
          placeholder="Email" 
          style={styles.input}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          style={styles.input}
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%', // Modal ke andar fit ho jaye
    padding: '20px',
    backgroundColor: '#fff', // White background
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
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  button: {
    padding: '10px',
    backgroundColor: '#f0c14b', // Amazon yellow tone
    border: '1px solid #a88734',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Login;