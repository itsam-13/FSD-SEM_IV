import { CheckCircle2, History, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in container" style={{ paddingBottom: '5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About <span style={{ color: 'var(--primary)' }}>CarePulse</span></h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Founded in 1995, we have grown to become a leader in patient-focused healthcare, blending cutting-edge medical technology with compassionate care.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Story</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
            What began as a small clinic has evolved into a multi-specialty regional hospital system. Our journey has been defined by a constant pursuit of excellence and a deep commitment to the communities we serve.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ color: 'var(--primary)' }}><CheckCircle2 size={24} /></div>
              <p>Top-rated medical facility in the region</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ color: 'var(--primary)' }}><CheckCircle2 size={24} /></div>
              <p>State-of-the-art diagnostic imaging center</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ color: 'var(--primary)' }}><CheckCircle2 size={24} /></div>
              <p>Dedicated 24/7 emergency response team</p>
            </div>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <div style={{ display: 'grid', gap: '3rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '1rem', color: 'white' }}><History size={28} /></div>
              <div>
                <h3>Our Legacy</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>25+ years of clinical excellence and community trust.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ background: 'var(--accent)', padding: '0.8rem', borderRadius: '1rem', color: 'white' }}><Target size={28} /></div>
              <div>
                <h3>Our Mission</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>To provide exceptional healthcare services that improve people's lives.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ background: 'var(--secondary)', padding: '0.8rem', borderRadius: '1rem', color: 'white' }}><Eye size={28} /></div>
              <div>
                <h3>Our Vision</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Innovating healthcare to be more accessible, personal, and effective.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
