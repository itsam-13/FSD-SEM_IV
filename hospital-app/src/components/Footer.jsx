import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--secondary)', color: 'white', padding: '5rem 0 2rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            <span style={{ color: 'white' }}>Care<span style={{ color: 'var(--primary)' }}>Pulse</span></span>
          </div>
          <p style={{ opacity: 0.7, marginBottom: '1.5rem' }}>Dedicated to providing the best healthcare solutions with compassion and medical excellence.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.7 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Our Services</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.7 }}>
            <li>Emergency Care</li>
            <li>Primary Care</li>
            <li>Surgery</li>
            <li>Rehabilitation</li>
            <li>Specialized Care</li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Info</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.7 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><MapPin size={18} /> 456 Healthcare St, Medicine City</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Phone size={18} /> +1 (555) 123-4567</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Mail size={18} /> info@carepulse.com</li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} CarePulse Hospital. Made with <Heart size={14} style={{ color: 'var(--primary)', fill: 'var(--primary)' }} /> for better health.</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .social-icon { 
          background: rgba(255,255,255,0.1); 
          width: 40px; 
          height: 40px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          transition: 0.3s; 
          color: white;
        }
        .social-icon:hover { 
          background: var(--primary); 
          transform: translateY(-3px); 
        }
      `}} />
    </footer>
  );
};

export default Footer;
