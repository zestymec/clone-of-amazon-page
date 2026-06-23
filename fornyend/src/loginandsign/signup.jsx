import { useState } from 'react';
import axios from 'axios';

const Signup = ({ onClose }) => { // Prop receive kiya
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert("Signup successful! Now login.");
      onClose(); // Signup ke baad modal band kar dein
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.closeBtn} onClick={onClose}>&times;</button>
      
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder="Username" 
          style={styles.input}
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
        />
        {/* Email type text kar di taake validation issue na ho */}
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
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    padding: '20px',
    backgroundColor: '#fff',
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
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Signup;