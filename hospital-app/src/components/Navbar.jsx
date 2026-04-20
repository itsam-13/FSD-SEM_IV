import { Link, NavLink } from 'react-router-dom';
import { Stethoscope, Menu, X, Pill } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = ({ isActive }) => ({
    color: isActive ? 'var(--primary)' : 'inherit',
    fontWeight: isActive ? '700' : '500',
    borderBottom: isActive ? '2px solid var(--primary)' : 'none',
  });

  return (
    <nav className="glass-card" style={{ 
      position: 'sticky', 
      top: '1rem', 
      margin: '1rem auto', 
      width: '95%', 
      maxWidth: '1200px', 
      zIndex: 1000, 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '0.8rem 2rem', 
      borderRadius: '2rem' 
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', color: 'white', display: 'flex' }}>
          <Stethoscope size={24} />
        </div>
        <span>Care<span style={{ color: 'var(--primary)' }}>Pulse</span></span>
      </Link>

      {/* Desktop Menu */}
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <NavLink to="/" style={activeStyle}>Home</NavLink>
        <NavLink to="/services" style={activeStyle}>Services</NavLink>
        <NavLink to="/doctors" style={activeStyle}>Doctors</NavLink>
        <NavLink to="/about" style={activeStyle}>About Us</NavLink>
        <NavLink to="/login" className="btn btn-primary">Login</NavLink>
      </div>

      {/* Mobile Menu Icon (Simplified for now) */}
      <div className="mobile-toggle" style={{ display: 'none' }}>
        <Menu />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
