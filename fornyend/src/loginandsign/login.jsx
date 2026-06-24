import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose, isSignupMode = false }) => {
  const [isSignup, setIsSignup] = useState(isSignupMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? 'http://localhost:5000/api/auth/signup' : 'http://localhost:5000/api/auth/login';
    
    try {
      const res = await axios.post(endpoint, formData);
      
      if (!isSignup) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify({ name: res.data.username }));
        
        alert("Login Successful!");
        
        // Modal band karein (agar hai)
        if (onClose) onClose();
        
        // Pehle navigate karein, phir reload
        navigate('/');
        window.location.reload(); 
      } else {
        alert("Signup Successful! Please login.");
        setIsSignup(false);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Operation failed");
    }
  };

  return (
    <div style={styles.container}>
      {onClose && <button style={styles.closeBtn} onClick={onClose}>&times;</button>}
      <h2 style={{ textAlign: 'center' }}>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {isSignup && (
          <input type="text" placeholder="Username" style={styles.input} value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
        )}
        <input type="text" placeholder="Email" style={styles.input} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <div style={styles.passwordContainer}>
          <input type={showPassword ? "text" : "password"} placeholder="Password" style={styles.input} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
          <button type="button" style={styles.showBtn} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" style={styles.button}>{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p style={styles.toggleText} onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Login" : "New Customer? Sign up"}
      </p>
    </div>
  );
};

const styles = {
  container: { position: 'relative', width: '100%', padding: '20px', backgroundColor: '#fff' },
  closeBtn: { position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', outline: 'none', flex: 1 },
  passwordContainer: { display: 'flex', gap: '5px' },
  showBtn: { padding: '5px 10px', cursor: 'pointer', backgroundColor: '#eee', border: 'none', borderRadius: '4px' },
  button: { padding: '10px', backgroundColor: '#f0c14b', border: '1px solid #a88734', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  toggleText: { textAlign: 'center', cursor: 'pointer', color: 'blue', fontSize: '14px', marginTop: '10px', textDecoration: 'underline' }
};

export default Login;