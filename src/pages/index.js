import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '../css/homepage.css';
export default function Home() {
  return (
    <Layout title="MarocMPSI">

      {/* GLOBAL STYLE */}
      <style>{`
        body {
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
        }
      `}</style>

      {/* HERO */}
      <div style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #eef2ff, #ffffff)'
      }}>
        <h1
  style={{
    fontSize: '4rem',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '1rem',
    lineHeight: '1.1',
  }}
>
  Maroc<span style={{ color: '#16a34a' }}>MPSI</span>
</h1>
        <p
  style={{
    fontSize: '1.35rem',
    color: '#4b5563',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8',
  }}
>
  La plateforme gratuite dédiée aux étudiants des classes préparatoires MPSI au Maroc.
  Retrouvez des cours complets, des exercices corrigés, des colles, des problèmes,
  ainsi que des sujets de concours, le tout dans un seul espace.
</p>

       <div
  style={{
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  }}
>
  <Link
    className="button button--primary button--lg"
    to="/docs/analyse"
    style={{
      fontWeight: '700',
      fontSize: '1.1rem',
    }}
  >
    Commencer
  </Link>

  <Link
    className="button button--secondary button--lg"
    to="/docs"
    style={{
      fontWeight: '700',
      fontSize: '1.1rem',
    }}
  >
    Tous les cours
  </Link>
</div>
      </div>

      {/* CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        padding: '3rem'
      }}>
        {[
          ['Analyse 📈', '/docs/analyse', '#3b82f6'],
          ['Algèbre ➗', '/docs/algebre', '#10b981'],
          ['Exercices 🧠', '/docs/exercices', '#f59e0b'],
          ['Colles 📚', '/docs/colles', '#8b5cf6'],
          ['Problèmes 🧩', '/docs/problemes', '#ef4444'],
        ].map(([title, link, color]) => (
          <Link
            key={title}
            to={link}
            style={{
              padding: '2rem',
              borderRadius: '18px',
              textDecoration: 'none',
              color: '#111827',
              background: 'white',
              border: `2px solid ${color}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              fontSize: '1.25rem',
              fontWeight: '700',
              transition: 'all 0.25s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
              e.currentTarget.style.background = color;
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#111827';
            }}
          >
            {title}
          </Link>
        ))}
      </div>
<div
  style={{
    padding: '5rem 2rem',
    background: '#f8fafc',
    textAlign: 'center',
  }}
>
  <h2
    style={{
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '3rem',
    }}
  >
    Pourquoi choisir MarocMPSI ?
  </h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}
  >
    <div>
      <h3>📚 Cours complets</h3>
      <p>Des cours rédigés spécialement pour les étudiants MPSI.</p>
    </div>

    <div>
      <h3>📝 Exercices corrigés</h3>
      <p>Des exercices progressifs avec des corrections détaillées.</p>
    </div>

    <div>
      <h3>🎯 Concours</h3>
      <p>Une préparation orientée vers les concours des CPGE.</p>
    </div>
  </div>
</div>
{/* STATS */}
<div
  style={{
    padding: '5rem 2rem',
    background: '#ffffff',
  }}
>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    <div>
      <h2 style={{ color: '#16a34a', fontSize: '3rem', margin: 0 }}>50+</h2>
      <p>Cours</p>
    </div>

    <div>
      <h2 style={{ color: '#2563eb', fontSize: '3rem', margin: 0 }}>1000+</h2>
      <p>Exercices</p>
    </div>

    <div>
      <h2 style={{ color: '#dc2626', fontSize: '3rem', margin: 0 }}>100+</h2>
      <p>Colles</p>
    </div>

    <div>
      <h2 style={{ color: '#9333ea', fontSize: '3rem', margin: 0 }}>20+</h2>
      <p>Concours</p>
    </div>
  </div>
</div>
    </Layout>
  );
}