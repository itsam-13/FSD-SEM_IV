import { Star, Calendar, MessageSquare } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    { name: 'Dr. Sarah Wilson', special: 'Chief Cardiologist', exp: '15 Years', rating: 4.9, img: 'https://images.unsplash.com/photo-1559839734-2b71aa159802?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Dr. James Anderson', special: 'Neurosurgeon', exp: '12 Years', rating: 4.8, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Dr. Emily Chen', special: 'Pediatrician', exp: '8 Years', rating: 4.9, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Dr. Robert Miller', special: 'Oncologist', exp: '20 Years', rating: 5.0, img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop' },
  ];

  return (
    <div className="animate-fade-in container" style={{ paddingBottom: '5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Meet Our <span style={{ color: 'var(--primary)' }}>Specialists</span></h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>Highly qualified medical professionals ready to help you.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {doctors.map((d, i) => (
          <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
            <img src={d.img} alt={d.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid #fff', boxShadow: 'var(--shadow)' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{d.name}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{d.special}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>Exp: {d.exp}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Star size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} /> {d.rating}</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.8rem' }}><Calendar size={14} /> Book</button>
              <button className="btn btn-outline" style={{ flex: 1, padding: '0.6rem', fontSize: '0.8rem' }}><MessageSquare size={14} /> Chat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
