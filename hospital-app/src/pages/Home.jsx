import { ArrowRight, Activity, Users, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', paddingTop: '3rem' }}>
        <div className="hero-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '2rem', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
            <Activity size={16} /> 24/7 Professional Medical Care
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Your Health is our <span style={{ color: 'var(--primary)' }}>Top Priority.</span></h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Experience world-class healthcare with state-of-the-art facilities and a team of dedicated specialist doctors.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Our Services <ArrowRight size={18} /></Link>
            <Link to="/about" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>About Us</Link>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ background: 'var(--primary)', position: 'absolute', width: '100%', height: '100%', top: '20px', left: '20px', borderRadius: '2rem', zIndex: -1 }}></div>
          <img 
            src="/hospital_hero_banner_1775546732020.png" 
            alt="Hospital Hero" 
            style={{ width: '100%', borderRadius: '2rem', objectFit: 'cover', transform: 'rotate(-2deg)' }} 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div className="stat-card">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>50+</h2>
            <p style={{ opacity: 0.8 }}>Professional Doctors</p>
          </div>
          <div className="stat-card">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>15k+</h2>
            <p style={{ opacity: 0.8 }}>Happy Patients</p>
          </div>
          <div className="stat-card">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>20+</h2>
            <p style={{ opacity: 0.8 }}>Medical Awards</p>
          </div>
          <div className="stat-card">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>99%</h2>
            <p style={{ opacity: 0.8 }}>Positive Results</p>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose CarePulse?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ background: '#ecf9ff', padding: '1rem', borderRadius: '1rem', width: 'fit-content', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
              <Users size={32} />
            </div>
            <h3>Expert Doctors</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Leading specialists dedicated to your well-being.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '1rem', width: 'fit-content', margin: '0 auto 1.5rem', color: 'var(--accent)' }}>
              <ShieldCheck size={32} />
            </div>
            <h3>Safety First</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Maintaining the highest standards of medical hygiene.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ background: '#fff7ed', padding: '1rem', borderRadius: '1rem', width: 'fit-content', margin: '0 auto 1.5rem', color: '#f97316' }}>
              <Award size={32} />
            </div>
            <h3>Certified Facility</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Accredited globally for excellence in healthcare.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
