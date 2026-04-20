import { HeartPulse, FlaskConical, Stethoscope, Scissors, Brain, Microscope, PhoneCall } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Emergency Care', icon: <HeartPulse size={40} />, color: '#ef4444', desc: 'Critical lifesaving treatments at a moment’s notice, available 24/7.' },
    { title: 'Cardiology', icon: <Stethoscope size={40} />, color: '#ec4899', desc: 'Dedicated heart analysis and surgery performed by the best.' },
    { title: 'Diagnostics & Labs', icon: <FlaskConical size={40} />, color: '#0ea5e9', desc: 'Advanced screening technology to diagnose any condition fast.' },
    { title: 'Surgical Unit', icon: <Scissors size={40} />, color: '#10b981', desc: 'Precision surgeries using state-of-the-art medical equipment.' },
    { title: 'Neurology', icon: <Brain size={40} />, color: '#8b5cf6', desc: 'Solving brain and nerve system disorders with care.' },
    { title: 'General Checkup', icon: <Microscope size={40} />, color: '#f59e0b', desc: 'Keeping your health in check with regular medical exams.' },
  ];

  return (
    <div className="animate-fade-in container" style={{ paddingBottom: '5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Specialized <span style={{ color: 'var(--primary)' }}>Services</span></h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>Providing high-quality medical care across a wide range of clinical departments.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {services.map((s, i) => (
          <div key={i} className="glass-card" style={{ transition: '0.4s', cursor: 'default' }}>
            <div style={{ color: s.color, marginBottom: '2rem', background: `${s.color}15`, width: 'fit-content', padding: '1.5rem', borderRadius: '1.5rem' }}>
              {s.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{s.desc}</p>
            <a href="#" style={{ color: s.color, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>Learn More <PhoneCall size={16} /></a>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass-card:hover { transform: scale(1.03); border-color: var(--primary); }
      `}} />
    </div>
  );
};

export default Services;
