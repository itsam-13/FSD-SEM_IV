import { Lock, Mail, ChevronRight, User } from 'lucide-react';

const Login = () => {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5rem 0', minHeight: '80vh' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '400px', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-muted)' }}>Login to access your healthcare portal</p>
        </div>

        <form style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
              <Mail size={18} />
            </span>
            <input 
              type="email" 
              placeholder="Email address" 
              style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '0.8rem', border: '1.5px solid var(--border)', fontSize: '1rem', background: 'transparent' }} 
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
              <Lock size={18} />
            </span>
            <input 
              type="password" 
              placeholder="Password" 
              style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '0.8rem', border: '1.5px solid var(--border)', fontSize: '1rem', background: 'transparent' }} 
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', gap: '1rem' }}>
            Login Now <ChevronRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: 700 }}>Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
